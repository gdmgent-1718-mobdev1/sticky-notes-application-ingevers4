/* 
*  Hier wil ik zeker nog op verderwerken om alle services te gebruiken.
*  
*/

function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

//IIFI function
ready(function(){

    var App = {
        "init": function() {
            this._applicationDbContext = ApplicationDbContext; // Reference to the ApplicationDbContext object
            this._applicationDbContext.init('ahs.nmd.stickynotes'); // Intialize the ApplicationDbContext with the connection string as parameter value
            this.testApplicationDbContext(); // Test DbContext
        },
        "testApplicationDbContext": function() {
            //to clear all the sticky notes at once
            var del = this._applicationDbContext.deleteAllStickyNotes();

            document.getElementById("btnNew").addEventListener("click", createSticky);

            var tempStr = '';
            var note = '';
            var result = document.querySelector('.notes');
            var newSn; 
            
            function createSticky() {

                let note = prompt("Create your new note:", " ");
                console.log(note);

                let newSn = new StickyNote();
                newSn.message = note;
                ApplicationDbContext.addStickyNote(newSn);

                let data = ApplicationDbContext.getStickyNotes();
                console.log(data);

                data.forEach(function(i) {
                    tempStr += `
                    <li class="new_li" id="${i.id}">${i.message}</li>
                    `;
                }); 

                result.innerHTML = tempStr;
                  
                
            }

            let data = ApplicationDbContext.getStickyNotes();
            console.log(data);
             
            
                    
            

            

            

            

            
            
                
            


            /*


            */
            

            
            

            //hier kun je de bestaande sticky notes mee opvragen. 
            /*let data = this._applicationDbContext.getStickyNotes();
            console.log(data);

            //een nieuwe sticky note verwijderen is simpel via deze methode.
            let hey = this._applicationDbContext.deleteStickyNoteById(1942045952247);
            let wow = this._applicationDbContext.deleteStickyNoteById(2696272574710);
            let woa = this._applicationDbContext.deleteStickyNoteById(2383845019780);

            //om een nieuwe sticky note te maken moeten deze stappen ondernomen worden in main.js
            let make = new StickyNote();
            


            



            /* 1. Get all sticky notes
            let data = this._applicationDbContext.getStickyNotes();
            console.log(data);
            // 2. Create a new sticky note
            let sn = new StickyNote();
            sn.message = 'Pak cola zero voor mezelf.';
            sn = this._applicationDbContext.addStickyNote(sn); // add to db and save it
            // 3. Get allesticky notes
            data = this._applicationDbContext.getStickyNotes();
            console.log(data);
            // 4. Get sticky note by id
            sn = this._applicationDbContext.getStickyNoteById(2306155430445);
            console.log(sn);
            // 5. Delete sticky note by id
            const deleted = this._applicationDbContext.deleteStickyNoteById(2306155430445);
            console.log(deleted);
            // 6. Soft Delete sticky note with id: 1551637732407
            //const softDeleted = this._applicationDbContext.softDeleteStickyNoteById(1551637732407);
            //console.log(softDeleted);
            //sn = this._applicationDbContext.getStickyNoteById(1551637732407);
            //console.log(sn);
            // 6. Soft Delete sticky note with id: 1551637732407
            const softUnDeleted = this._applicationDbContext.softUnDeleteStickyNoteById(1551637732407);
            console.log(softUnDeleted);
            sn = this._applicationDbContext.getStickyNoteById(1551637732407);
            console.log(sn);
            // Update sticky note with id: 1902577181167
            sn = this._applicationDbContext.getStickyNoteById(1902577181167);
            console.log(sn);
            sn.message = 'ik heb zin in een zwarte kat (koffie)...';
            const updated = this._applicationDbContext.updateStickyNote(1902577181167);
            console.log(updated);
            sn = this._applicationDbContext.getStickyNoteById(1902577181167);
            console.log(sn);*/
        }
        
            
    
    };



    App.init(); // Initialize the application
});