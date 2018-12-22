import { OnInit, Component, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";
import { debug } from "util";

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @ViewChild('serverNameInput') serverNameInput: ElementRef;
    @ViewChild('serverContentInput') serverContentInput: ElementRef;
    
    constructor() {}

    ngOnInit() {}

    onAddServer() {
      this.serverCreated.emit({
        serverName: this.serverNameInput.nativeElement.value, 
        serverContent: this.serverContentInput.nativeElement.value
      });        
    }
    
    onAddBlueprint() {
      this.blueprintCreated.emit({
        serverName: this.serverNameInput.nativeElement.value, 
        serverContent: this.serverContentInput.nativeElement.value
      });
    }
}
