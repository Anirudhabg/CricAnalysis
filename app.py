import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from flask import Flask, request, jsonify, render_template

# Load bowlers dataset
bowlers_data = pd.read_csv('Datasets/bowlers.csv')

# Handling non-numeric values in the dataset
bowlers_data = bowlers_data.replace('-', 0)  # Replace '-' with 0, assuming it represents missing or undefined data

le_player_bowlers = LabelEncoder()
le_opposition_bowlers = LabelEncoder()
le_venue_bowlers = LabelEncoder()
le_match_type_bowlers = LabelEncoder()

bowlers_data['Player Name'] = le_player_bowlers.fit_transform(bowlers_data['Player Name'])
bowlers_data['Opposition'] = le_opposition_bowlers.fit_transform(bowlers_data['Opposition'])
bowlers_data['Venue'] = le_venue_bowlers.fit_transform(bowlers_data['Venue'])
bowlers_data['Match Type'] = le_match_type_bowlers.fit_transform(bowlers_data['Match Type'])

X_bowlers = bowlers_data[['Player Name', 'Opposition', 'Venue', 'Match Type']]
y_bowlers = bowlers_data['Wickets']

X_train_bowlers, X_test_bowlers, y_train_bowlers, y_test_bowlers = train_test_split(X_bowlers, y_bowlers, test_size=0.2, random_state=42)
bowlers_model = RandomForestRegressor(n_estimators=100, random_state=42)
bowlers_model.fit(X_train_bowlers, y_train_bowlers)

print("Bowlers Model Score:", bowlers_model.score(X_test_bowlers, y_test_bowlers))

# Load batsmen dataset
batsmen_data = pd.read_csv('Datasets/batsman.csv')

# Handling non-numeric values in the dataset
batsmen_data = batsmen_data.replace('-', 0)  # Replace '-' with 0, assuming it represents missing or undefined data

le_player_batsmen = LabelEncoder()
le_opposition_batsmen = LabelEncoder()
le_venue_batsmen = LabelEncoder()
le_match_type_batsmen = LabelEncoder()

batsmen_data['Player Name'] = le_player_batsmen.fit_transform(batsmen_data['Player Name'])
batsmen_data['Opposition'] = le_opposition_batsmen.fit_transform(batsmen_data['Opposition'])
batsmen_data['Ground'] = le_venue_batsmen.fit_transform(batsmen_data['Ground'])
batsmen_data['Match Type'] = le_match_type_batsmen.fit_transform(batsmen_data['Match Type'])

X_batsmen = batsmen_data[['Player Name', 'Opposition', 'Ground', 'Match Type']]
y_batsmen = batsmen_data['Runs']

X_train_batsmen, X_test_batsmen, y_train_batsmen, y_test_batsmen = train_test_split(X_batsmen, y_batsmen, test_size=0.2, random_state=42)
batsmen_model = RandomForestRegressor(n_estimators=100, random_state=42)
batsmen_model.fit(X_train_batsmen, y_train_batsmen)

print("Batsmen Model Score:", batsmen_model.score(X_test_batsmen, y_test_batsmen))

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if data['Type'] == 'bowler':
        player = le_player_bowlers.transform([data['Player Name']])[0]
        opposition = le_opposition_bowlers.transform([data['Opposition']])[0]
        venue = le_venue_bowlers.transform([data['Venue']])[0]
        match_type = le_match_type_bowlers.transform([data['Match Type']])[0]
        prediction = bowlers_model.predict([[player, opposition, venue, match_type]])
        return jsonify({'predicted_wickets': prediction[0]})

    elif data['Type'] == 'batsman':
        player = le_player_batsmen.transform([data['Player Name']])[0]
        opposition = le_opposition_batsmen.transform([data['Opposition']])[0]
        venue = le_venue_batsmen.transform([data['Venue']])[0]
        match_type = le_match_type_batsmen.transform([data['Match Type']])[0]
        prediction = batsmen_model.predict([[player, opposition, venue, match_type]])
        return jsonify({'predicted_runs': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
