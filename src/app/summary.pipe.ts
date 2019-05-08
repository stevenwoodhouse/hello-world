import { Pipe, PipeTransform} from '@angular/core';
import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Pipe ({
  name: 'summary'
})

export class SummaryPipe implements PipeTransform {



  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }

    let actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + '...';

  }
}
