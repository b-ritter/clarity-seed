import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClarityIcons } from 'clarity-icons';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {
        ClarityIcons.add({"my-first-custom-icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><title>MAC set</title><g id='4b9f38fa-04ed-48a0-962b-52d52d99cb31' data-name='Layer 3'><path d='M14.3,22.6a1,1,0,0,1,.61-1.87,1,1,0,0,1,.65.2,5.47,5.47,0,0,0,3.53,1.3c1.37,0,2.23-.65,2.23-1.58v0c0-.9-.5-1.39-2.84-1.93-2.68-.65-4.2-1.44-4.2-3.76v0c0-2.16,1.8-3.65,4.3-3.65a6.94,6.94,0,0,1,4,1.17,1,1,0,0,1,.49.88,1,1,0,0,1-1,1,1.07,1.07,0,0,1-.58-.16,5.24,5.24,0,0,0-2.9-1c-1.3,0-2.05.67-2.05,1.49v0c0,1,.58,1.4,3,2,2.67.65,4,1.6,4,3.69v0c0,2.36-1.85,3.76-4.5,3.76A7.85,7.85,0,0,1,14.3,22.6Z'/><path d='M26.07,32H9.93L1.87,18,9.93,4H26.07l8.06,14Zm-15-2H24.91l6.91-12L24.91,6H11.09L4.18,18Z'/></g></svg>"});
        console.log(ClarityIcons.get("my-first-custom-icon"));
    }
}
