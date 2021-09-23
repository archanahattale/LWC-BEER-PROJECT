import { LightningElement, api } from 'lwc';

export default class BeerTile extends LightningElement {
    @api beerRecord;

    handleAddToCart(){
        const addToCart = new CustomEvent(
           'Cart',
           {
               detail:this.beerRecord.Id
           }
        );

    }
}