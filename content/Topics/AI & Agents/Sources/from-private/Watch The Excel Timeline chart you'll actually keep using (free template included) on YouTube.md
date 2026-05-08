---
wiki-ingested: true
domain: business-strategy
group: products-operations-business-economics
---
<https://www.youtube.com/watch?v=GP1W4fKWUrA>

Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video [[concepts/tutorial|tutorial]] on creating a dynamic project timeline in [[entities/microsoft-excel|Excel]].

# How to Create a Dynamic Project Timeline in Excel

This tutorial explains how to turn a standard Excel dataset into a professional, dynamic timeline chart in just a few minutes, avoiding the manual work required in PowerPoint.

## 1\. Data [[concepts/setup|Setup]]

Before creating the chart, organize your data into an Excel Table (Ctrl + T) with three columns:

* **Date:** The date of the event.
* **Milestone:** The description of the event.
* **Level (Helper Column):** This column determines the height and direction of the timeline "stems" to prevent text overlap.
	* _Initial Setup:_ Place a placeholder number (e.g., `10`) in all rows for now.

## 2\. Creating the Base Chart

1. Select the **Date** and **Level** columns.
2. Go to **Insert** > **Line Chart** > **Line with Markers**.
3. **Remove the Line:** Right-click the line on the chart > **Format Data Series** > **Line** > **No Line**.

## 3\. Creating the "Stems" (Error Bars)

To connect the markers to the axis (creating the timeline look):

1. Select the Chart.
2. Click the **+** (Chart Elements) button.
3. Check **Error Bars** > **More Options**.
4. In the Format pane (Vertical Error Bar settings):
	* **Direction:** Minus.
	* **End [[concepts/style|Style]]:** No [[entities/cap|Cap]].
	* **Error Amount:** Percentage > **100%**.
5. _Formatting:_ Change the line color and increase the width to make the stems visible.

## 4\. Staggering the Heights (The Logic)

To prevent milestone labels from overlapping, use a formula in the **Level** column to create a repeating pattern of different heights (positive and negative).
**The Formula:** Use the `CHOOSE` and `MOD` functions to cycle through height values based on the row number.
```
=CHOOSE(MOD(ROW() - ROW([#Headers]), 4) + 1, 40, -10, 12, -30)


```

* **Logic:** This formula calculates a remainder based on the row number and assigns a value from the list (40, -10, 12, -30).
* **Result:** The markers [[entities/will|will]] jump up and down in a consistent pattern, creating space for text.

## 5\. Formatting the Axis

1. **Set Date Bounds:** Right-click the horizontal axis > **Format Axis**. Set the **Minimum** and **Maximum** bounds to your project start and end dates.
2. **Clean Up:**
	* **Tick Marks:** Set to "None".
	* **Labels:** Set Label Position to "None" (we will add dates to the markers instead).
3. **Style:** Change the axis line color and add an arrow to the end (End Arrow type) to look like a timeline.

## 6\. Adding Data Labels

1. Right-click the markers > **Add Data Labels**.
2. Select the labels and go to **Format Data Labels**.
3. **Label Contents:**
	* Check **Value From Cells** (Select the "Milestone" text column).
	* Check **Category Name** (This displays the Date).
	* Uncheck **Value**.
4. **Separator:** Select **(New Line)** to stack the Date and Description.
5. **Alignment:** Left align the text for a cleaner look.

## 7\. Final Polish

* **Plot Area:** Resize the plot area manually (drag the corners inside the chart) to give the labels on the far left and right "breathing room" so they aren't cut off.
* **Gridlines:** Select and delete gridlines.
* **Individual Formatting:** You can select a single data point (click twice slowly) to change its color (e.g., highlighting a "Go-Live" date in a different color).

## Benefits

* **Dynamic:** If you change a date in the table, the chart updates automatically.
* **Reusable:** Once set up, you can save this as a template.
* **Professional:** Looks significantly better than standard Excel charts.

## Related Concepts
- [[concepts/dynamic-project-timeline|dynamic project timeline]] — [Wikipedia](https://en.wikipedia.org/wiki/dynamic_project_timeline)
- [[concepts/excel-chart|Excel chart]] — [Wikipedia](https://en.wikipedia.org/wiki/Excel_chart)

## Related Entities
- [[entities/excel-table|Excel Table]] — [Wikipedia](https://en.wikipedia.org/wiki/Excel_Table)
- [[entities/ctrl-t|Ctrl + T]] — [Wikipedia](https://en.wikipedia.org/wiki/Ctrl_%2B_T)