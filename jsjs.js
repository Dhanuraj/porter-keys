// Configuration
const CONFIG = {
    SHEET_ID: 'YOUR_GOOGLE_SHEET_ID',
    SHEET_NAME: 'Sheet1', // Change if different
    CORS_PROXY: 'https://cors-anywhere.herokuapp.com/' // Remove if not needed
  };
  
  // State
  let appData = {
    qnaList: [],
    searchIndex: {}
  };
  
  // Initialize Application
  async function initializeApp() {
    try {
      showLoading();
      const csvData = await loadSheetData();
      appData.qnaList = parseCSV(csvData);
      buildSearchIndex();
      handleSearch();
    } catch (error) {
      showError(error);
    } finally {
      hideLoading();
    }
  }
  
  // Load Data from Google Sheets
  async function loadSheetData() {
    const url = `${CONFIG.CORS_PROXY}https://docs.google.com/spreadsheets/d/e/2PACX-1vTol92af0XYwk0fnhbuvJU6rh9u59WTKsBWBTkF6k-mDGizkGmpbwTMA60hMvsVEUdccj1IYlViwhtJ/pub?output=csv/${CONFIG.SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${CONFIG.SHEET_NAME}`;
    const response = await fetch(url);
    return await response.text();
  }
  
  // CSV Parser for Your Structure
  function parseCSV(csv) {
    const rows = csv.split('\n').slice(1); // Remove header row
    return rows.map(row => {
      const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      return {
        number: parseInt(columns[0].replace(/^"|"$/g, '')),
        action: columns[1].replace(/^"|"$/g, ''),
        answer: columns[2].replace(/^"|"$/g, ''),
        question: columns[3].replace(/^"|"$/g, '')
      };
    });
  }
  
  // Build Search Index
  function buildSearchIndex() {
    appData.searchIndex = appData.qnaList.reduce((acc, item) => {
      acc[item.number] = item;
      return acc;
    }, {});
  }
  
  // Modified Search Handler
  function handleSearch() {
    const searchTerm = dom.searchInput.value.toLowerCase();
    const results = appData.qnaList.filter(item => {
      return item.question.toLowerCase().includes(searchTerm) ||
             item.action.toLowerCase().includes(searchTerm) ||
             item.answer.toLowerCase().includes(searchTerm);
    });
    displayResults(results);
  }
  
  // Display Results
  function displayResults(results) {
    dom.resultsContainer.innerHTML = results.map(item => `
      <div class="result-item" data-number="${item.number}" onclick="showAnswer(${item.number})">
        <div class="question-number">Q${item.number}</div>
        <div class="question-text">${item.question}</div>
        <div class="action-text">Action: ${item.action}</div>
      </div>
    `).join('');
  }
  
  // Show Answer
  function showAnswer(number) {
    const item = appData.searchIndex[number];
    if (!item) return;
  
    dom.answerContent.innerHTML = `
      <h3>Q${number}: ${item.question}</h3>
      <div class="action">${item.action}</div>
      <div class="answer">${item.answer}</div>
    `;
    dom.answerContainer.style.display = 'block';
  }
  
  // Initialize when page loads
  document.addEventListener('DOMContentLoaded', initializeApp);