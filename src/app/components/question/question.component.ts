import { Component, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  word: WordType = null;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    this.fetchWord()
  }

  addToNouns(): void {
    this.wordsService.addNoun(this.word)
    this.fetchWord()
  }

  addToVerbs(): void {
    this.wordsService.addVerb(this.word)
    this.fetchWord()
  }

  check() {
    this.wordsService.check()
  }

  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift()
  }

}
