$(document).ready(function() {
  var person_data = [
    {
      "name": "Jessica Henry",
      "phone": "1-703-538-1021",
      "email": "pede@vestibulumlorem.com"
    },
    {
      "name": "Kathleen Franco",
      "phone": "(793) 613-5366",
      "email": "duis.a@augue.org"
    },
    {
      "name": "Nicholas Hanson",
      "phone": "(225) 542-5766",
      "email": "pede.cras@antebibendum.co.uk"
    },
    {
      "name": "Hilel Battle",
      "phone": "1-525-527-5466",
      "email": "mollis.dui.in@dolorelit.org"
    },
    {
      "name": "Deirdre Bishop",
      "phone": "1-341-681-3635",
      "email": "sed@duiaugueeu.net"
    },
    {
      "name": "Colton Pate",
      "phone": "(177) 520-7671",
      "email": "lorem.eget@quisquenonummy.net"
    },
    {
      "name": "Ray Ramirez",
      "phone": "(886) 765-4027",
      "email": "dui.cras@integervitae.net"
    },
    {
      "name": "Savannah Marks",
      "phone": "1-435-418-5622",
      "email": "congue.turpis@venenatisvel.org"
    },
    {
      "name": "Michelle Hooper",
      "phone": "1-222-591-1711",
      "email": "fermentum.arcu.vestibulum@interdum.co.uk"
    },
    {
      "name": "Quentin Taylor",
      "phone": "1-260-515-4251",
      "email": "aliquam.ornare@nonlorem.org"
    },
    {
      "name": "Martha Kirby",
      "phone": "1-693-265-1847",
      "email": "eros.nam@acurna.co.uk"
    },
    {
      "name": "Kimberly Oneal",
      "phone": "(871) 438-0111",
      "email": "molestie.sed.id@velest.edu"
    },
    {
      "name": "Martin Osborn",
      "phone": "(816) 634-3484",
      "email": "malesuada.augue@justoproinnon.com"
    },
    {
      "name": "Merrill Gallagher",
      "phone": "(665) 863-2488",
      "email": "odio.aliquam@non.ca"
    },
    {
      "name": "Mark Harrison",
      "phone": "(908) 836-9317",
      "email": "nisi@auctornonfeugiat.edu"
    },
    {
      "name": "Giselle Travis",
      "phone": "(757) 859-4644",
      "email": "euismod.urna@pellentesquetincidunttempus.edu"
    },
    {
      "name": "Griffin Sellers",
      "phone": "1-705-858-7518",
      "email": "magna.et.ipsum@craspellentesque.org"
    },
    {
      "name": "Kelly Key",
      "phone": "(203) 635-8437",
      "email": "nibh.enim@fuscefermentum.net"
    },
    {
      "name": "Brynn Burgess",
      "phone": "1-683-259-6471",
      "email": "congue.in.scelerisque@mitemporlorem.org"
    },
    {
      "name": "Macy Little",
      "phone": "(725) 610-5563",
      "email": "pellentesque.a.facilisis@placeratcras.com"
    },
    {
      "name": "Wynne Adkins",
      "phone": "(599) 313-3188",
      "email": "ut.molestie@inscelerisque.edu"
    },
    {
      "name": "Madison Holder",
      "phone": "1-125-436-8713",
      "email": "bibendum.fermentum@duissit.edu"
    },
    {
      "name": "Wanda Woodward",
      "phone": "1-518-796-1615",
      "email": "luctus.ipsum@volutpat.net"
    },
    {
      "name": "Flynn Andrews",
      "phone": "(802) 637-9728",
      "email": "mus.proin@accumsan.co.uk"
    },
    {
      "name": "Alec Villarreal",
      "phone": "(286) 713-6464",
      "email": "arcu@euturpisnulla.co.uk"
    },
    {
      "name": "Drew Stark",
      "phone": "1-176-439-4762",
      "email": "sed@quismassamauris.com"
    },
    {
      "name": "Quemby Reese",
      "phone": "1-889-939-6146",
      "email": "purus@diamluctuslobortis.net"
    },
    {
      "name": "Ursa Henson",
      "phone": "(877) 534-0466",
      "email": "gravida@liberomorbi.org"
    },
    {
      "name": "Dana Stevenson",
      "phone": "1-626-422-0661",
      "email": "primis@sedauctor.edu"
    },
    {
      "name": "Alvin Kirby",
      "phone": "(147) 340-5762",
      "email": "vitae.aliquam@proindolornulla.co.uk"
    },
    {
      "name": "Honorato Lloyd",
      "phone": "(696) 971-8410",
      "email": "feugiat.lorem@interdumnuncsollicitudin.org"
    },
    {
      "name": "Silas Mckinney",
      "phone": "1-609-245-1712",
      "email": "eu.ultrices.sit@nullamscelerisque.org"
    },
    {
      "name": "Kimberley Cabrera",
      "phone": "1-601-247-5073",
      "email": "lobortis@etmagnis.ca"
    },
    {
      "name": "Caryn Herrera",
      "phone": "1-726-547-6018",
      "email": "risus.a@eros.com"
    },
    {
      "name": "Orlando Nixon",
      "phone": "1-842-825-4116",
      "email": "in@tellus.com"
    },
    {
      "name": "Melvin Mcfarland",
      "phone": "1-164-772-1921",
      "email": "mauris.ipsum@adipiscingfringilla.org"
    },
    {
      "name": "Kaseem Paul",
      "phone": "(981) 428-4650",
      "email": "arcu.vestibulum@natoque.co.uk"
    },
    {
      "name": "Kylee Wagner",
      "phone": "1-581-261-4217",
      "email": "varius.nam.porttitor@id.net"
    },
    {
      "name": "William Norris",
      "phone": "1-148-685-8613",
      "email": "et@curabitur.com"
    },
    {
      "name": "Hedy Reed",
      "phone": "(639) 339-1927",
      "email": "tincidunt.donec@ornare.org"
    },
    {
      "name": "Beverly Roman",
      "phone": "(272) 815-8528",
      "email": "vitae.posuere@cras.com"
    },
    {
      "name": "Prescott Parks",
      "phone": "(314) 345-1206",
      "email": "lobortis.nisi.nibh@egetnisi.com"
    },
    {
      "name": "Shelby Simpson",
      "phone": "(325) 466-1616",
      "email": "risus@ipsum.edu"
    },
    {
      "name": "Lucy Livingston",
      "phone": "(361) 666-6351",
      "email": "duis.risus.odio@lectusnullamsuscipit.ca"
    },
    {
      "name": "Portia Ray",
      "phone": "(798) 806-9414",
      "email": "a@accumsanconvallis.net"
    },
    {
      "name": "Kevin Dotson",
      "phone": "1-763-916-3696",
      "email": "venenatis.vel@montesnascetur.ca"
    },
    {
      "name": "Ashely Blackburn",
      "phone": "(592) 608-6483",
      "email": "adipiscing.elit@convallisest.edu"
    },
    {
      "name": "Alana Garrett",
      "phone": "1-572-457-2652",
      "email": "facilisis.eget@fuscemollisduis.co.uk"
    },
    {
      "name": "Rana Rogers",
      "phone": "(722) 615-4145",
      "email": "fermentum.metus.aenean@enimdiamvel.edu"
    },
    {
      "name": "Chloe Bryant",
      "phone": "(457) 296-2139",
      "email": "enim.suspendisse@montesnasceturridiculus.com"
    },
    {
      "name": "Ignacia Freeman",
      "phone": "1-823-233-3200",
      "email": "fermentum.metus@facilisisnon.net"
    },
    {
      "name": "Dane Silva",
      "phone": "1-828-237-0481",
      "email": "sed.et.libero@eratsednunc.net"
    },
    {
      "name": "Zoe Daniels",
      "phone": "1-586-772-9523",
      "email": "ridiculus.mus.donec@pharetra.edu"
    },
    {
      "name": "Vladimir Wolfe",
      "phone": "(395) 127-2818",
      "email": "accumsan.sed@faucibus.org"
    },
    {
      "name": "Iona Maldonado",
      "phone": "(888) 435-5842",
      "email": "integer.vulputate@proin.edu"
    },
    {
      "name": "Katell Christensen",
      "phone": "1-442-594-2916",
      "email": "laoreet.lectus.quis@velitaliquamnisl.co.uk"
    },
    {
      "name": "Ebony Todd",
      "phone": "1-448-808-8800",
      "email": "vestibulum.ante@phasellusornare.co.uk"
    },
    {
      "name": "Kenneth Butler",
      "phone": "(624) 561-7142",
      "email": "ipsum.donec@utsemper.ca"
    },
    {
      "name": "Eve Irwin",
      "phone": "(346) 548-4324",
      "email": "duis.volutpat@aptenttaciti.edu"
    },
    {
      "name": "Jin Walls",
      "phone": "(629) 333-5455",
      "email": "donec.nibh.enim@ametmetusaliquam.net"
    },
    {
      "name": "Scarlet Byers",
      "phone": "1-520-656-4112",
      "email": "sapien.gravida.non@faucibus.ca"
    },
    {
      "name": "Chase Swanson",
      "phone": "1-751-713-0486",
      "email": "egestas@porttitorvulputateposuere.com"
    },
    {
      "name": "Kenyon Mccarty",
      "phone": "1-270-229-1636",
      "email": "ornare.sagittis@non.org"
    },
    {
      "name": "Quon Hobbs",
      "phone": "1-842-978-6388",
      "email": "arcu@crasdolordolor.net"
    },
    {
      "name": "Gregory Howe",
      "phone": "(902) 665-0892",
      "email": "arcu.curabitur@ultricesa.ca"
    },
    {
      "name": "Cade Gonzales",
      "phone": "1-413-712-8462",
      "email": "sed.pede.nec@purusac.net"
    },
    {
      "name": "Shay Cobb",
      "phone": "1-821-506-1197",
      "email": "laoreet.libero@risusat.org"
    },
    {
      "name": "Eric Frederick",
      "phone": "(269) 609-7656",
      "email": "aenean.sed.pede@risusnunc.co.uk"
    },
    {
      "name": "Aiko Merritt",
      "phone": "(364) 380-3738",
      "email": "mauris.ut.quam@adipiscingelit.net"
    },
    {
      "name": "Howard Holmes",
      "phone": "(841) 778-8073",
      "email": "at.velit.cras@erat.net"
    },
    {
      "name": "Nicholas Tyler",
      "phone": "(505) 476-8276",
      "email": "phasellus.in@estcongue.net"
    },
    {
      "name": "Haley Levine",
      "phone": "1-581-175-8742",
      "email": "eu.nibh@massainteger.com"
    },
    {
      "name": "Xaviera Mack",
      "phone": "1-437-232-4989",
      "email": "aenean@eget.net"
    },
    {
      "name": "Ulla Best",
      "phone": "(804) 617-7420",
      "email": "nibh.quisque@mi.net"
    },
    {
      "name": "Danielle Clay",
      "phone": "1-173-502-3138",
      "email": "nunc@adipiscinglobortis.ca"
    },
    {
      "name": "Wang Rasmussen",
      "phone": "(783) 197-8651",
      "email": "nostra.per@convallisliguladonec.com"
    },
    {
      "name": "Wanda French",
      "phone": "(285) 740-8144",
      "email": "ac@vitaenibh.ca"
    },
    {
      "name": "Brendan Petty",
      "phone": "(501) 353-8930",
      "email": "ornare.facilisis@nullamscelerisqueneque.ca"
    },
    {
      "name": "Stella Case",
      "phone": "1-453-673-6256",
      "email": "in.tempus@eget.net"
    },
    {
      "name": "Adele Hopper",
      "phone": "(371) 538-2621",
      "email": "ultricies.sem.magna@donectempuslorem.co.uk"
    },
    {
      "name": "Jakeem Dalton",
      "phone": "(836) 925-9543",
      "email": "nunc.in@gravidasit.org"
    },
    {
      "name": "Ali Barron",
      "phone": "(227) 650-2343",
      "email": "vitae@maecenas.ca"
    },
    {
      "name": "Indira Holder",
      "phone": "(226) 435-7821",
      "email": "dictum.placerat@purusac.net"
    },
    {
      "name": "Veronica Johnston",
      "phone": "(427) 608-2276",
      "email": "tellus@porttitorinterdumsed.net"
    },
    {
      "name": "Jamal Gallegos",
      "phone": "1-871-415-4833",
      "email": "mauris.vestibulum@velconvallis.org"
    },
    {
      "name": "Holmes Pollard",
      "phone": "1-595-712-4254",
      "email": "nec@praesentinterdum.co.uk"
    },
    {
      "name": "Yoko Herman",
      "phone": "(880) 247-7461",
      "email": "eu.placerat@eu.edu"
    },
    {
      "name": "Kay Hampton",
      "phone": "1-585-768-8016",
      "email": "justo.nec@nisiaenean.ca"
    },
    {
      "name": "Maile Pollard",
      "phone": "1-955-340-8248",
      "email": "vitae.semper@at.ca"
    },
    {
      "name": "Tanek Porter",
      "phone": "1-788-202-5875",
      "email": "id.libero@velvenenatis.edu"
    },
    {
      "name": "Noah Frost",
      "phone": "(197) 307-7723",
      "email": "interdum.nunc.sollicitudin@eu.com"
    },
    {
      "name": "Abel Foley",
      "phone": "(965) 868-8183",
      "email": "penatibus.et@fringillapurus.org"
    },
    {
      "name": "Ezra Fletcher",
      "phone": "(255) 958-2027",
      "email": "cursus@ipsumac.edu"
    },
    {
      "name": "Aladdin Ferrell",
      "phone": "(782) 506-1186",
      "email": "imperdiet.erat@blanditenim.com"
    },
    {
      "name": "Aquila Bridges",
      "phone": "(734) 436-7177",
      "email": "etiam.gravida@porttitorvulputate.com"
    },
    {
      "name": "Reuben Houston",
      "phone": "1-158-973-4374",
      "email": "aenean.eget.metus@rhoncusnullamvelit.ca"
    },
    {
      "name": "Demetrius Cortez",
      "phone": "(761) 429-7392",
      "email": "in.felis.nulla@suscipit.co.uk"
    },
    {
      "name": "Mona Mcmahon",
      "phone": "(437) 833-6748",
      "email": "enim.commodo@aultriciesadipiscing.ca"
    },
    {
      "name": "Wylie Perry",
      "phone": "(669) 536-3635",
      "email": "feugiat.nec.diam@mauriselit.org"
    },
    {
      "name": "Hedley Rosales",
      "phone": "1-739-101-0579",
      "email": "ipsum.primis@vestibulum.ca"
    }
  ];

  window.deletePerson = function(email) {
    person_data = person_data
      .filter(person => person.email !== email)
    
    let val = $("#search").val();
    const filtered_person_data = Boolean(val)
      ? person_data.filter(person => person.name.toLowerCase().includes(val))
      : person_data;
      
    render(filtered_person_data);
  }
  
  $("#search").keyup(function(){
  	let val = $("#search").val();
    const filtered_person_data = person_data
    .filter(person => person.name.toLowerCase().includes(val));
    render(filtered_person_data);
  })

  var render = function(people=person_data) {
    $("#person_table tbody").html("")
    let trow = "";
    $.each(people, function(key, value) {
      trow += '<tr>';
      trow += '<td>' + value.name + '</td>';
      trow += '<td>' + value.phone + '</td>';
      trow += '<td>' + value.email + '</td>';
      trow += `<td><button onClick='deletePerson("${value.email}")'>Sil</button></td>`;
      trow += '</tr>';
    });
    $('#person_table tbody').html(trow)
  }

  render();
});
