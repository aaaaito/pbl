// JavaScriptのコードの一部を定義
// 食品データベースからデータを読み取ります。このデータはdatabase.jsonに格納されているものと仮定します。
const foodDatabase = [
    { name: "りんご", calories: 52 },
    { name: "バナナ", calories: 89 },
    // 他の食品データ
];

const foodList = document.getElementById("food-list");
const totalCalories = document.getElementById("total-calories");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", searchFood);

function searchFood() {
    const foodSearchInput = document.getElementById("food-search").value;
    let foundFood = foodDatabase.find(food => food.name === foodSearchInput);

    if (foundFood) {
        // 食品をリストに追加
        const listItem = document.createElement("li");
        listItem.textContent = `${foundFood.name}: ${foundFood.calories} カロリー`;
        foodList.appendChild(listItem);

        // カロリーの合計を更新
        updateTotalCalories();
    } else {
        // エラーメッセージを表示
        alert("該当する食品が見つかりません。");
    }
}

function updateTotalCalories() {
    const foodItems = document.querySelectorAll("#food-list li");
    let total = 0;

    foodItems.forEach(item => {
        const calories = parseInt(item.textContent.split(":")[1]);
        total += calories;
    });

    totalCalories.textContent = `合計カロリー：${total}`;
}

// グラフ表示のコードはChart.jsなどのライブラリを使用して実装
