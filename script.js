let animals = document.querySelectorAll('.animal')

let dogButton = document.createElement('button')
dogButton.textContent = 'Vote for Dogo'
animals[0].append(dogButton)

let dogVotes = document.querySelector('#doggo-votes')
let dogVotesCheck = localStorage.getItem('dog-votes')
if(dogVotesCheck){dogVotes.textContent = dogVotesCheck}

dogButton.addEventListener('click', function(e){
    let dogCount = parseInt(dogVotes.textContent);
    ++dogCount;
    dogVotes.textContent=dogCount;
    localStorage.setItem('dog-votes',dogCount);
})


let catButton = document.createElement('button')
catButton.textContent = 'Vote for Catto'
animals[1].append(catButton)

let catVotes = document.querySelector('#catto-votes')
let catVotesCheck = localStorage.getItem('cat-votes')
if(catVotesCheck){catVotes.textContent = catVotesCheck}

catButton.addEventListener('click', function(e){
    let catCount = parseInt(catVotes.textContent);
    ++catCount;
    catVotes.textContent=catCount;
    localStorage.setItem('cat-votes',catCount);
})

let fishButton = document.createElement('button')
fishButton.textContent = 'Vote for Fish Gold'
animals[2].append(fishButton)

let fishVotes = document.querySelector('#fish-votes')
let fishVotesCheck = localStorage.getItem('fish-votes')
if(fishVotesCheck){fishVotes.textContent = fishVotesCheck}

fishButton.addEventListener('click', function(e){
    let fishCount = parseInt(fishVotes.textContent);
    ++fishCount;
    fishVotes.textContent=fishCount;
    localStorage.setItem('fish-votes',fishCount);
})