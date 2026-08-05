---
wiki-ingested: true
domain: business-strategy
group: products-operations-business-economics
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

Clip title:** Excel OFFSET Function for Dynamic Calculations - Explained in Simple Steps
**Author / channel:** [[entities/leila-gharani|Leila Gharani]]
**URL:** https://youtu.be/RPTQjbk2qy4

Here is a detailed summary of the video "OFFSET for Dynamic Calculations" by Leila Gharani from [[entities/xelplus|XelPlus]]:

**Overview**
The video provides a comprehensive [[concepts/tutorial|tutorial]] on using the `OFFSET` function in [[entities/microsoft-excel|Microsoft Excel]] to perform dynamic calculations [1.1]. The function allows users to reference a cell or [[concepts/range|range]] of cells relative to a starting point by specifying a certain number of rows and columns [1.1]. This is ideal for eliminating the need to manually adjust formula ranges as new data is added over time [1.1]. The instructor demonstrates three specific scenarios to highlight the flexibility of the function.

**The Concept and Syntax**
*   **Concept**: `OFFSET` operates much like a set of GPS coordinates [1.1]. You provide a starting reference point and direct Excel on how many steps to take up, down, left, or right to arrive at a destination cell or range [1.1].
*   **Syntax**: `OFFSET(reference, rows, cols, [height], [width])` [1.1]
    *   *Reference*: The starting point cell or range [1.1].
    *   *Rows*: The number of rows to move down (positive) or up (negative) [1.1].
    *   *Cols*: The number of columns to move right (positive) or left (negative) [1.1].
    *   *Height*: (Optional) The total number of rows you want returned [1.1].
    *   *Width*: (Optional) The total number of columns you want returned [1.1].
*   The instructor emphasizes that if the height and width return a multi-cell range instead of just a single cell, the formula must be wrapped inside a container function that can handle ranges, such as `AVERAGE` or `SUM`.

**Scenario 1: Dynamic Moving Average of the Last 6 Months (Vertical Columns)**
*   The video presents a vertical table displaying monthly sales [1.7]. A standard `=AVERAGE` formula would require manual updates whenever a new row of data is added [1.4].
*   To solve this dynamically, she shows two approaches:
    1.  Using the `COUNT` function to find the bottom of the data set, then moving down to it and specifying a height of `-6` to return the last six filled rows.
    2.  Using the `COUNT` function to locate the last cell, subtracting `6` from it to calculate a new dynamic starting point, and specifying a height of `6` to look forward.

**Scenario 2: Dynamic Moving Average of the Last 6 Months (Horizontal Rows)**
*   In this scenario, the data is laid out horizontally across a single row rather than in a column [1.1].
*   To make it dynamic, the instructor uses a variation of the same formula. She stays on the same row (specifying `0` for rows), uses `COUNT` to calculate how many filled columns exist, and assigns a width of `-6` to pull the range of the last 6 months going horizontally backwards [1.1].

**Scenario 3: Calculating Next 3 Months' Average Based on a Drop-Down Selection**
*   This example shows how to calculate a specific rolling average based on a user's manual selection from a drop-down menu [1.2].
*   The instructor combines `OFFSET` with the `MATCH` function: `=AVERAGE(OFFSET(B25, MATCH(F25, A26:A51, 0), 0, 3, 1))`.
*   The `MATCH` function finds the specific row index of the date selected by the user in the drop-down. `OFFSET` receives that index to determine exactly how many rows to move down, before returning a block height of `3` to calculate the average of that month and the next two months [1.1].

**A Word of Caution**
*   At the end of the video, the [[entities/speaker|speaker]] gives an important piece of advice: `OFFSET` is a volatile function. This means that Excel recalculates its value every time *any* change is made to the worksheet [1.4], which can slow down performance on massive, complex [[concepts/files|files]] [1.8]. She advises using it wisely and avoiding over-relying on it in bloated workbooks [1.8].