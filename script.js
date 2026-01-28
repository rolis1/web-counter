let votes = [0, 0, 0];

// Ambil data dari localStorage saat pertama kali load
if (localStorage.getItem("votes")) {
  votes = JSON.parse(localStorage.getItem("votes"));
  updateUI();
}

function addVote(index) {
  votes[index - 1]++;
  updateUI();
}

function minusVote(index) {
  if (votes[index - 1] > 0) {
    votes[index - 1]--;
    updateUI();
  }
}

function updateUI() {
  document.getElementById("count1").innerText = votes[0];
  document.getElementById("count2").innerText = votes[1];
  document.getElementById("count3").innerText = votes[2];

  let total = votes[0] + votes[1] + votes[2];
  document.getElementById("totalVote").innerText = total;

  // SIMPAN ke localStorage setiap update
  localStorage.setItem("votes", JSON.stringify(votes));
}
