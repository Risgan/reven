import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pcb-lista',
  templateUrl: './pcb-list.component.html',
  styleUrls: ['./pcb-list.component.scss'],
})
export class PcbListComponent implements OnInit {
@ViewChild('obserSyncComp') obserSyncComp;
  constructor() { }

  ngOnInit() {}

}
