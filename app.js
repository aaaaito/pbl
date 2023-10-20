// JavaScriptのコードの一部を定義
// 食品データベースからデータを読み取ります。このデータはdatabase.jsonに格納されているものと仮定します。
const foodDatabase = [
    { name: "りんご", calories: 52 },
    { name: "バナナ", calories: 89 },
    // 他の食品データ
];

// 選択した食品の配列を保持する変数
const selectedFoods = [];

searchButton.addEventListener("click", searchFood);

function searchFood() {
    const foodSearchInput = document.getElementById("food-search").value;
    let foundFood = foodDatabase.find(food => food.name === foodSearchInput);

    if (foundFood) {
        // 食品をリストに追加
        const listItem = document.createElement("li");

        // ラジオボタンを作成
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "food-choice";
        radioBtn.value = foundFood.name;
        listItem.appendChild(radioBtn);

        // 食品情報を表示
        listItem.textContent = `${foundFood.name}: ${foundFood.calories} カロリー`;
        foodList.appendChild(listItem);

        // カロリーの合計を更新
        updateTotalCalories();

        // ラジオボタンが選択されたときのイベントリスナーを追加
        radioBtn.addEventListener("change", () => {
            if (radioBtn.checked) {
                // ラジオボタンが選択されたときに選択した食品を配列に追加
                selectedFoods.push(foundFood);
            } else {
                // ラジオボタンが選択解除されたときに選択した食品を配列から削除
                const index = selectedFoods.indexOf(foundFood);
                if (index !== -1) {
                    selectedFoods.splice(index, 1);
                }
            }
        });
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

