import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  a1 = 0;
  a2 = 0;
  aa1 = 0;
  bb1 = 0;
  aa2 = 0;
  bb2 = 0;

  plus?: string;
  minus?: string;
  proiz?: string;
  delen?: string;

  constructor(
    readonly cd: ChangeDetectorRef,
  ) {}

  opPlus = () => `(${this.a1 + this.a2}, ${this.aa1 + this.aa2}, ${this.bb1 + this.bb2})`;
  opMinus = () => `(${this.a1 - this.a2}, ${this.aa1 + this.bb2}, ${this.bb1 + this.aa2})`;
  opPro1 = () => `(${this.a1 * this.a2}, ${this.a1 * this.aa2 + this.a2 * this.aa1}, ${this.a1 * this.bb2 + this.a2 * this.bb1})`;
  opPro2 = () => `(${this.a1 * this.a2}, ${this.a2 * this.aa1 - this.a1 * this.bb2}, ${this.a2 * this.bb1 - this.a1 * this.aa2})`;
  opPro3 = () => `(${this.a1 * this.a2}, ${(-this.a2) * this.bb1 - this.a1 * this.bb2}, ${(-this.a2) * this.aa1 - this.a1 * this.aa2})`;

  opPro = () => {
    if (Number(this.a1) > 0 && Number(this.a2) > 0) {
      return this.opPro1();
    } else if (Number(this.a1) < 0 && Number(this.a2) > 0 || Number(this.a1) > 0 && Number(this.a2) < 0) {
      return this.opPro2();
    } else if (Number(this.a1) < 0 && Number(this.a2)) {
      return this.opPro3();
    } else {
      return '()';
    }
  };

  calc(): void {
    this.cd.detectChanges();
  }
}
