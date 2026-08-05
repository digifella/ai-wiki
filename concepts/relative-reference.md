---
type: concept
domain: business-strategy
group: products-operations-business-economics
tags:
  - "excel"
  - "offset-function"
  - "dynamic-calculation"
  - "spreadsheet"
  - "relative-reference"
aliases:
  - "Excel OFFSET"
  - "Dynamic Calculations with OFFSET"
summary: The Excel OFFSET function is used to create dynamic calculations within spreadsheets.
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Relative Reference

A relative reference in spreadsheet applications like Excel is a cell reference that automatically adjusts when a formula is copied or moved to a different location. When you create a formula containing a relative reference and copy it to another cell, the reference updates to maintain the same positional relationship to the new cell. For example, if a formula in cell A1 references B1 (one column to the right), copying that formula to A2 automatically updates the reference to B2, preserving the offset of one column.

## Contrast with Absolute References

Relative references differ from absolute references, which remain fixed regardless of where a formula is copied. Absolute references use dollar signs (such as $B$1) to lock both the column and row. Many spreadsheet operations require a combination of both reference types—for instance, a formula might use absolute references to always refer to a fixed tax rate while using relative references to adjust row numbers as the formula is copied down a column of data.

## Practical Application

Relative references are fundamental to efficient spreadsheet work because they eliminate the need to manually edit formulas when applying the same calculation across multiple cells or ranges. This capability enables users to build scalable models and reduce errors that might occur from manual formula adjustment. The automatic adjustment of relative references makes it possible to quickly apply calculations to large datasets without recreating formulas for each cell.
