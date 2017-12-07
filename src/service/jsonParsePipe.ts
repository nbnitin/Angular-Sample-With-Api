import { Injectable, Inject, Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'key' })

export class ParseJson implements PipeTransform {

  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
}
