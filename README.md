# 🎬 Movie Recommendation Engine  

A hybrid **movie recommendation system** that combines **collaborative filtering** and **content-based filtering** to deliver personalized movie suggestions based on user preferences, watch history, and genre similarity.

---

## 🧠 Overview  
The **Movie Recommendation Engine** analyzes user–movie interaction data and metadata (genres, ratings, descriptions) to generate tailored recommendations. It uses **Scikit-learn**, **Pandas**, and **similarity-based algorithms** to compute recommendations and visualize performance metrics.

---

## 🚀 Features  
- Hybrid recommendation approach: **Collaborative + Content-based filtering**  
- Uses 50+ user and movie attributes for enhanced precision  
- Implements **genre weighting** and **user history filtering**  
- Achieved a **30% improvement** in recommendation accuracy after optimization  
- Generates visual reports and metrics to evaluate performance  
- Clean, modular code for scalability and reuse  

---

## 🧩 Tech Stack  
- **Language:** Python  
- **Libraries:** Pandas, NumPy, Scikit-learn, Matplotlib  
- **Tools:** Jupyter Notebook / VS Code  

---

## 📂 Project Structure  
Movie-Recommendation-Engine/
│
├── data/
│ ├── movies.csv
│ ├── ratings.csv
│ └── users.csv
│
├── notebooks/
│ ├── EDA.ipynb
│ └── model_training.ipynb
│
├── src/
│ ├── data_preprocessing.py
│ ├── recommender.py
│ └── evaluation.py
│
├── results/
│ ├── performance_metrics.png
│ └── recommendations_sample.csv
│
├── README.md
└── LICENSE

yaml
Copy code

---

## ⚙️ Setup Instructions  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/yourusername/movie-recommendation-engine.git
   cd movie-recommendation-engine
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run the notebook or script:

bash
Copy code
python src/recommender.py
🧪 How It Works
Data Loading: Reads user, movie, and rating data.

Feature Engineering: Generates embeddings and similarity matrices using cosine similarity.

Model Training: Combines collaborative and content-based predictions.

Recommendation Output: Returns top-N recommended movies for each user.

📊 Example Output
User ID	Recommended Movies
101	Inception, Interstellar, Memento
205	The Matrix, John Wick, Speed

📈 Results
Improved recommendation precision by 30% after tuning.

Enhanced diversity and relevance of recommendations.

Generated performance reports and visualizations for stakeholders.

🧑‍💻 Author
Atharv Latta
📧 [[lattaatharv.com](lattaatharv@gmail.com)]
🌐 [[https://github.com/atharv-17-L](https://github.com/atharv-17-L)]
