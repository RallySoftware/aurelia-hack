import {Behavior} from 'aurelia-framework';

export class GreetingCustomElement {
  static metadata(){
    return Behavior.withProperty('greeting');
  }
}