import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMoment } from 'src/app/@types/Moments';

import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss'],
})
export class NewMomentComponent {
  btnText = 'Compartilhar';

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  async createHandler(moment: IMoment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
    this.messageService.add('Momento adicionado com sucesso!');

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 4500)
  }
}
