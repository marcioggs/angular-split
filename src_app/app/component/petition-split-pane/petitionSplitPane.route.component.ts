import { Component } from '@angular/core';

@Component({
    selector: 'petition-split-pane',
    styles: [`
        .bloc {
            height: 100%;
        }

        .explanations {
            padding: 15px;
        }

        .panel {
            font-size: 100px;
            font-weight: bold;
            color: #cccccc;

            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            overflow: hidden;
        }
        .panel > p {
            margin: 0;
        }
        button {
            margin-bottom: 10px;
        }
    `],
    template: `
        <as-split direction="vertical">
            <as-split-area
                        order="0" 
                        size="60">
                <div class="bloc">
                    <div class="explanations">
                        <button (click)="toggleShowPettionDetails()" 
                        class="btn btn-warning">Toggle Petition Details</button>
                    </div>
                </div>
            </as-split-area>
            <as-split-area *ngIf="showPetitionDetails"
                        order="1" 
                        size="40">
                <div class="bloc panel">
                    <p>Petition Details</p>
                </div>
            </as-split-area>
        </as-split>`
})
export class PetitionSplitPaneComponent {
    showPetitionDetails: boolean = false;

    toggleShowPettionDetails() {
        this.showPetitionDetails = !this.showPetitionDetails;
    }

}
