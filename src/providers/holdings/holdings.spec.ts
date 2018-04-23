import { TestBed, inject, async } from '@angular/core/testing';
import { HoldingsProvider } from './holdings';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IonicStorageModule } from '@ionic/storage';


describe('Provider: Holdings Provider', () =>  {
    
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [HoldingsProvider],
            imports: [
                HttpClientModule,
                HttpClientTestingModule,
                IonicStorageModule.forRoot()] 
        }).compileComponents();
    }));

    afterEach(()=>{

    });

    it('El provider debería estar definido', ()=>{
        expect(HoldingsProvider).toBeDefined();
    }); 

});