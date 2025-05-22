# 🏏 CricAnalysis

**CricAnalysis** is a machine learning-based web application that predicts the **future performance of Indian cricketers**. By analyzing historical data, the platform forecasts **runs scored** and **wickets taken** by players in upcoming matches — offering valuable insights for cricket fans, analysts, and strategists.

---

## 📌 Project Overview

CricAnalysis leverages a **custom-built dataset**, meticulously compiled from ESPN CricInfo, to power predictive models. These models assess a player’s past performance to forecast likely outcomes in future games.

### 🔍 Key Features

* 📈 **Prediction Models**: Predict future **runs scored** by batsmen and **wickets taken** by bowlers using trained ML models.
* 🧠 **Custom Dataset**: Cleaned and structured datasets built manually to ensure data quality and relevance.
* 📊 **Data Insights**: Useful for analysis, team selection strategies, and enhancing match-day predictions.
* 🌐 **User Interface**: Simple web app interface built using Flask.

---

## 🛠️ Technologies Used

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white) 
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)

<!-- | Category             | Tools / Libraries               |
| -------------------- | ------------------------------- |
| **Languages**        | Python, HTML, CSS, JavaScript   |
| **Framework**        | Flask                           |
| **Machine Learning** | Scikit-learn                    |
| **Data Handling**    | Pandas, NumPy                   |
| **Visualization**    | Matplotlib, Seaborn             |
| **Frontend**         | Bootstrap (via CSS), JavaScript |
| **Deployment-ready** | Localhost via Flask             | -->

---

## 📂 Project Structure

```
CricAnalysis/
│
├── app.py                      # Main Flask application
│
├── datasets/
│   ├── batsman.csv             # Historical performance of Indian batsmen
│   └── bowlers.csv             # Historical performance of Indian bowlers
│
├── static/
│   ├── css/                    # CSS styling files
│   ├── js/                     # JavaScript files
│   └── images/                 # Image assets (prediction charts, icons)
│
├── templates/
│   └── index.html              # Main UI template for the web app
│
├── requirements.txt            # Python dependencies
└── README.md                   # Project documentation
```

---

## 📈 Datasets

* **`batsman.csv`**: Contains historical performance metrics of Indian batsmen (e.g., runs, opposition, venue, match type).
* **`bowlers.csv`**: Contains historical bowling performance (e.g., wickets, economy, match type, ground).

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Anirudhabg/CricAnalysis.git
cd CricAnalysis
```

### 2. Install Dependencies

Ensure you have Python installed. Then install all required packages:

```bash
pip install -r requirements.txt
```

### 3. Run the Flask Application

```bash
python app.py
```

### 4. View the Web App

Open your browser and navigate to:

```
http://127.0.0.1:5000/
```

You’ll be able to:

* Predict **runs** scored by batsmen.
* Predict **wickets** taken by bowlers.

---

## 🖼️ Sample Predictions
<table> <tr> <td align="center"> <strong>Batsman Prediction (Rishabh Pant)</strong><br> <img src="https://github.com/Anirudhabg/CricAnalysis/blob/3a7ac971a903d3473b046422e6dab3076ae34ba0/Images/Batsmen_Prediction.png" width="400"/> </td> <td align="center"> <strong>Bowler Prediction (Jasprit Bumrah)</strong><br> <img src="https://github.com/Anirudhabg/CricAnalysis/blob/3a7ac971a903d3473b046422e6dab3076ae34ba0/Images/Bowler_Prediction.png" width="400"/> </td> </tr> </table>

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more details.

---
> Crafted by Anirudha B G Somayaji
