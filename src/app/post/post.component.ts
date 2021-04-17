import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // ChangeDetectionStrategy.OnPush - стратегия будет такой что данные будут реагировать только на входные инпуты
  // для оптимизации, если компонент будет меняться только от входных параметров
  changeDetection: ChangeDetectionStrategy.OnPush
})


// https://angular.io/guide/lifecycle-hooks
// Жизненные циклы компонента, для этапов
// implements OnInit --- для TS имплементируем интерфейс OnInit
// в компоненте писать по мере вызова жизненного цикла
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() post!: Post
  @Output() onRemove = new EventEmitter<number>()

  @ContentChild('info', {static: true}) infoRef!: ElementRef

  constructor() {
    console.log('constructor, вызывается первый, но логику писать нужно в ngOnInit')
  }


  removePost(): void {
    this.onRemove.emit(this.post.id)
  }

  // ngOnChanges - показывает момент изменения данных, был ли первый аз изменен, и можно посмотреть старое значение
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // ngOnInit - инициализация компонента
  ngOnInit(): void {
    console.log(this.infoRef.nativeElement);
  }

  // отрабатывает во время каких - либо изменений, вызывается на каждое изменение, вызывается после ngOnChanges и ngOnInit
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  // вызывается когда срабатывает ng-content
  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }

  // вызывается когда весь контент готов для использования
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  // вызывается когда содержимое компонента готово для отображения
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  //
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  // вызывается когда компонент удаляется
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

}
