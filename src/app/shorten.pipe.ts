import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform = (value: any, limit: number): any => value.length > limit ? value.substring(0, limit ) + '...' : value;

}
