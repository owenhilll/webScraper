const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const PORT = 5000

const scrap = express()


scrap.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

axios('https://stackoverflow.com/questions?tab=Bounties')
    .then(response => {
        const data = response.data
        const page = cheerio.load(data)
        const questions = []
        
        page('.s-post-summary--content .s-post-summary--content-title', data).each(function(){
            
            const link = 'https://stackoverflow.com' + page(this).find('a').attr('href')
            page('.s-link', data).each(function(){
                const question = page(this).text()
                questions.push({question, link})
            })
        })
        console.log(questions)
    })
    .catch(err => console.log(err))