import { Word } from '../models/word.js'

function newWord(req, res) {
  res.render('words/new', {
    title: "Add Word",
  })
}

function index(req, res) {
  Word.find({})
  .populate('owner')
  .then(words => {
    console.log(words);
    res.render('words/index', {
      words,
      title: "My Words"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newWord as new,
  index,
}