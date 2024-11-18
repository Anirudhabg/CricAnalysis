# CricAnalysis

**CricAnalysis** is a machine learning project focused on predicting the future performance of Indian cricketers. The project leverages historical data to forecast key metrics such as runs scored and wickets taken by players in upcoming matches.

## Project Overview

CricAnalysis uses a manually curated dataset, sourced from ESPN CricInfo, containing detailed information on the past performances of currently active Indian cricketers. This data serves as the foundation for training the machine learning models that predict future player performances.

### Key Features

- **Prediction Models**: The project includes models that predict the runs a player will score or the number of wickets they will take in future matches.
- **Custom Dataset**: The dataset used for this project is manually created, ensuring accuracy and relevance by focusing on the most impactful metrics.
- **Data-Driven Insights**: By analyzing past performances, CricAnalysis provides insights that can help in strategic decision-making for team selection and match preparation.

### Technologies Used

- **Machine Learning**: Various machine learning algorithms are used to build and optimize predictive models.
- **Data Collection**: The dataset is compiled manually from ESPN CricInfo, focusing on the performances of Indian cricketers.
- **Python**: The core language used for data processing, model training, and prediction.
- **Libraries**: Key libraries include Pandas for data manipulation, Scikit-learn for machine learning, and Matplotlib for visualization.

## How to Use

1. **Clone the Repository**  
   Start by cloning the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Anirudhabg/CricAnalysis.git
   cd CricAnalysis
   ```

2. **Install the Required Dependencies**  
   Ensure you have Python installed on your system. Then, install the necessary dependencies using the `requirements.txt` file:

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Application**  
   After installing the dependencies, you can run the Flask application:

   ```bash
   python app.py
   ```

4. **Access the Application**  
   Open your web browser and go to `http://127.0.0.1:5000/` to access the CricAnalysis application. You can use the web interface to predict the future runs or wickets of Indian cricketers.

### Images
    Batsmen Prediction: [Rishab Pant]()
    Bowler Prediction: [Jasprit Bumrah]()