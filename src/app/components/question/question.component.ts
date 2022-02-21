import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

  word: WordType = null
  private words = []
  private subscription: Subscription

  constructor(private wordsService: WordsService){ }

  ngOnInit(): void {
    this.subscription = this.wordsService.getWords().subscribe((words: WordType[]) => {
      this.words = words
      this.fetchWord()
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  addToNouns(): void {
    this.wordsService.addNoun(this.word)
    this.fetchWord()
  }

  addToVerbs(): void {
    this.wordsService.addVerb(this.word)
    this.fetchWord()
  }

  private fetchWord(): void {
    this.word = this.words.shift()
  }

}
