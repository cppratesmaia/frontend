import { Component, Input, EventEmitter, Output } from "@angular/core";
import { TouchGestureEventData, GestureEventData } from "ui/gestures";

@Component({
    selector: "float-btn",
    template: `
    <StackLayout class="float-btn" (touch)="onTouch($event)" (tap)="onTap($event)">
        <Label class="float-btn-text" [text]="text"></Label>
    </StackLayout>
    `,
    styles: [`

            .float-btn {
                background-color: darkorange;
                border-radius: 28;
                width: 56;
                height: 56;
                text-align: center;
                vertical-align: middle;
            }

            .float-btn-down {
                animation-name: down;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
            }
            .float-btn-text {
                color: #ffffff;
                font-size: 36;
                margin-top:-4;
            }

            @keyframes down {
                0% { background-color: darkorange;}
                50% {background-color: orange;}
                100% { background-color: darkorange;}
            }            
    `]
})

export class FloatBtnComponent {

    @Input() text: string;
    @Output() tap: EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();

    public onTap(args: GestureEventData) {
        this.tap.emit(args);
    }
    public onTouch(args: TouchGestureEventData) {
        let btn = args.view; // Cannot read property 'view' of undefined
        switch (args.action) {
            case "down":
                btn.className = "float-btn float-btn-down";
                break;

            case "up":
                setTimeout(() => btn.className = "float-btn", 400);
                break;
        }
    }
}