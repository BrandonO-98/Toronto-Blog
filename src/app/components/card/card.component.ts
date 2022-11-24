import { Component, Input } from '@angular/core';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() story!: Story;
}
