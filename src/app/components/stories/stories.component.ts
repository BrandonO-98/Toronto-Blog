import { Component } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { chunk } from 'src/app/utils/chunk';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent {
  // create model for this
  columns: any[] = [{}, {}, {}];

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    // like a promise, a .then
    this.storyService.getStories().subscribe((stories) => {
      const chunkResult = chunk(stories, stories.length / this.columns.length);
      this.columns.map((elem: any, i) => (elem.stories = chunkResult[i]));
    });
  }
}
