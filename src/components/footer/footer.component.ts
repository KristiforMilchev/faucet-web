import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatRippleModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  color: string = '#cfacd4be;';
  private _snackBar = inject(MatSnackBar);

  copyToCliboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this._snackBar.open(
          'The value has been saved to the clipboard',
          undefined,
          {
            duration: 0.5 * 1000,
          }
        );
      })
      .catch((err) => {
        this._snackBar.open(
          'Oh no, something went wrong, please copy the value manually!',
          'Ok'
        );
      });
  }
}
