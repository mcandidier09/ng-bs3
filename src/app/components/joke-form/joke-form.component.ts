import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke/joke';


@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  createJoke(setup:string, punch: string) {
    this.jokeCreated.emit(new Joke(setup, punch));
  }

}
