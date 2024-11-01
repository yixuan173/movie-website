export const handleSortedSearchResults = (data, selectedSort, setSortedResults) => {
    let sortedResults = [...data];

    switch (selectedSort?.value) {
      case "dateDESC": {
        sortedResults.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        break;
      }
      case "dateASC": {
        sortedResults.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        break;
      }
      case "rateDESC": {
        sortedResults.sort((a, b) => b.vote_average - a.vote_average);
        break;
      }
      case "rateASC": {
        sortedResults.sort((a, b) => a.vote_average - b.vote_average);
        break;
      }
      default: {
        break;
      }
    }
    setSortedResults(sortedResults);
  }