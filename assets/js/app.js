const main = document.querySelector('body');



function createJs(){
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const paragraph = document.createElement('p');
  const link = document.createElement('a');
  const loren = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur mi in justo pulvinar finibus id et augue. Etiam ultricies ligula quis scelerisque hendrerit. Fusce ut ex at augue placerat luctus pulvinar in lorem. Vestibulum quis tortor at urna sodales facilisis non vel lacus. Cras sit amet turpis ut leo varius congue quis et augue. In pretium varius rhoncus. Ut euismod odio at orci dapibus, non dictum justo eleifend. Duis et libero a ligula semper pretium eu in orci. Fusce elementum eros lorem, vitae commodo tellus hendrerit a. Aenean urna elit, interdum vitae imperdiet ut, gravida nec urna. Sed porta nisi vitae pretium pharetra. Duis congue viverra urna eget porta. Duis augue nulla, elementum in justo ac, tristique rhoncus odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur finibus tincidunt massa maximus blandit. In elementum ultrices elit, eu sollicitudin est viverra ut.';

  container.appendChild(title);
  container.appendChild(paragraph);
  container.appendChild(link);
  main.appendChild(container);

  container.appendChild(title);
  container.appendChild(paragraph);
  container.appendChild(link);
  main.appendChild(container);

  container.className = 'container';
  container.setAttribute('id','container');
  title.className = 'title gray p m';
  title.setAttribute('id','title');
  title.innerHTML = `Titulo`;
  paragraph.className = 'paragraph darkgray p m';
  paragraph.setAttribute('id','paragraph');
  paragraph.innerHTML = `${loren}`;
  link.className = 'btn btn-primary';
  link.setAttribute('href','#');
  link.innerText = 'Link';
}


let i; 

for( i = 0; i < 3; i++) {
  createJs();
}

function responsiveJS() {
  let width = window.innerWidth;
  if ( width <= 600 ) {
    container.className = 'container mobile';
  } else if (width <= 992) {
    container.className = 'container desktop';
  } else if (width <= 1200 ) {
    container.className = 'container large';
  } else {
    container.className = 'container large';
  }
}

responsiveJS();