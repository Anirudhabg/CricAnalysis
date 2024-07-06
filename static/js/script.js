const bowlers = ["Akash Deep", "Arshdeep Singh", "Avesh Khan", "Axar Patel",
    "Deepak Chahar", "Hardik Pandya", "Jasprit Bumrah", "Jaydev Unadkat",
    "Khaleel Ahmed", "Kuldeep Yadav", "Mohammed Shami", "Mohammed Siraj",
    "Mukesh Kumar", "Prasidh Krishna", "Ravi Bishnoi", "Ravichandran Ashwin",
    "Ravindra Jadeja", "Sai Kishore", "Shahbaz Ahmed", "Shardul Thakur",
    "Umran Malik", "Washington Sundar", "Yuzvendra Chahal"];

const batsmen = ['Axar Patel', 'Hardik Pandya', 'Ishan Kishan', 'KL Rahul', 'Rajat Patidar',
    'Ravichandran Ashwin', 'Ravindra Jadeja', 'Rinku Singh', 'Rishabh Pant',
    'Rohit Sharma', 'Ruturaj Gaikwad', 'Sai Sudharsan', 'Sanju Samson',
    'Shivam Dube', 'Shreyas Iyer', 'Shubman Gill', 'Srikar Bharat',
    'Suryakumar Yadav', 'Tilak Varma', 'Virat Kohli', 'Yashasvi Jaiswal'];

const venues = ['Dubai (DICS)', 'Hangzhou', 'Visakhapatnam', 'Thiruvananthapuram',
    'Guwahati', 'Bengaluru', 'Adelaide', 'Southampton', 'Dublin (Malahide)', 'Sydney',
    'Mount Maunganui', 'Napier', 'Auckland', 'Christchurch', 'Ranchi', 'Lucknow',
    'Ahmedabad', 'Melbourne', 'Perth', 'Gqeberha', 'Johannesburg', 'Paarl', 'Pune',
    'Rajkot', 'Tarouba', 'Basseterre', 'Lauderhill', 'Providence', 'Bridgetown',
    'Port of Spain', 'Harare', 'Mohali', 'Indore', 'Hyderabad', 'Nagpur', 'Delhi',
    'Chennai', 'Eden Gardens', 'Raipur', 'Nottingham', 'Cuttack', 'Dharamsala', 'Mirpur',
    'North Sound', 'The Oval', "Lord's", 'Manchester', 'Birmingham', 'Hamilton', 'Wellington',
    'Roseau', 'Gros Islet', 'Cape Town', 'Centurion', 'Abu Dhabi', 'Kanpur', 'Pallekele',
    'Canberra', 'Brisbane', 'Brabourne', 'Wankhede']

const oppositions = [
    "Afghanistan", "Australia", "Bangladesh", "England", "Hong Kong",
    "Ireland", "Nepal", "Netherlands", "New Zealand", "Pakistan",
    "South Africa", "Sri Lanka", "U.S.A.", "West Indies", "Zimbabwe",
    "Namibia", "Scotland"
];
document.getElementById('type').addEventListener('change', function () {
    const type = this.value;
    const datalist = document.getElementById('players');
    datalist.innerHTML = '';

    const players = type === 'bowler' ? bowlers : batsmen;

    players.forEach(player => {
        const option = document.createElement('option');
        option.value = player;
        datalist.appendChild(option);
    });
});

const venueInput = document.getElementById('venue');
const venueList = document.getElementById('venueList');

// Function to populate the datalist with venue options
function populateVenueOptions() {
    // Clear existing options
    venueList.innerHTML = '';

    // Filter venues based on user input
    const inputText = venueInput.value.toLowerCase();
    const filteredVenues = venues.filter(venue => venue.toLowerCase().includes(inputText));

    // Add filtered venues as options to the datalist
    filteredVenues.forEach(venue => {
        const option = document.createElement('option');
        option.value = venue;
        venueList.appendChild(option);
    });
}

// Event listener for input changes
venueInput.addEventListener('input', populateVenueOptions);



function populateOppositions() {
    const datalist = document.getElementById('oppositionList');
    oppositions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        datalist.appendChild(optionElement);
    });
}

populateOppositions();
document.getElementById('prediction-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const playerName = document.getElementById('player-name').value;
    const opposition = document.getElementById('opposition').value;
    const venue = document.getElementById('venue').value;
    const matchType = document.getElementById('match-type').value;

    const data = {
        'Type': type,
        'Player Name': playerName,
        'Opposition': opposition,
        'Venue': venue,
        'Match Type': matchType
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            var predictWickets = Math.round(data.predicted_wickets);
            var predictRuns = Math.round(data.predicted_runs);
            const result = type === 'bowler' ? `Predicted Wickets: ${predictWickets}` : `Predicted Runs: ${predictRuns}`;
            document.getElementById('prediction-result').innerText = result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Trigger change event on page load to populate datalist
document.getElementById('type').dispatchEvent(new Event('change'));