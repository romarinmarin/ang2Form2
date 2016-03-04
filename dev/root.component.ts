import { Component } from "angular2/core";

@Component({
  selector: "ng2-app",
  template: `
    <section class="jumbotron vertical-center text-center">
      <div class="container">
        <h1>Welcome to Angular 2!</h1>
        <p>You did it!!!</p>
        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
      </div>
    </section>
  `,
  styles: [`
      span.glyphicon.glyphicon-thumbs-up {
      font-size: 8rem;
      color: #95CE3F;
      }

      .vertical-center {
        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */

        display: flex;
        align-items: center;
      }

      .jumbotron {
        margin: 0;
      }
    `]
})

export class RootComponent {

}
