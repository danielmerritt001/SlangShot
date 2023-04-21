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

function create(req, res) {
  req.body.owner = req.user.profile._id
  Word.create(req.body)
  .then(word => {
    res.redirect('/words')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Word.findById(req.params.wordId)
  .then(word => {
    res.render('words/edit', {
      word,
      title: "Edit Slang"
    })
  })
}

function update(req, res) {
  Word.findByIdAndUpdate(req.params.wordId, req.body, {new: true})
  .then(word => {
    res.redirect(`/words/${word._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteWord(req, res) {
  Word.findByIdAndDelete(req.params.wordId)
  .then(word => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Word.findById(req.params.wordId)
  .populate('owner')
  .then(word => {
    res.render('words/show', {
      word,
      title: "Word Show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createComment(req, res) {
  Word.findById(req.params.wordId)
  .then(word => {
    word.comments.push(req.body)
    word.save()
    .then(() => {
      res.redirect(`/words/${word._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteComment(req, res) {
  Word.findById(req.params.wordId)
  .then(word => {
    word.comments.remove(req.params.commentId)
    word.save()
    .then(() => {
      res.redirect(`/words/${word._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
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
  create,
  edit,
  show,
  deleteWord as delete,
  createComment,
  deleteComment,
  update,
}