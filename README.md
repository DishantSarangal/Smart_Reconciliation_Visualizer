# Smart Reconciliation Visualizer

## Overview
The Smart Reconciliation Visualizer is an interactive dashboard that helps users compare two financial datasets and quickly identify discrepancies between them.

It highlights:
- Records that match exactly
- Records that exist in both datasets but differ in amount
- Records that are missing from either dataset


---

## How to Run the Application

### Prerequisites
- Node.js (v18 or higher)
- npm

Approach and Technical Decisions
Problem Approach

The problem was approached as a data reconciliation task, not just a UI exercise.
The first step was to define clear and deterministic reconciliation rules so that discrepancies are easy to explain and verify.

The application follows this flow:

Upload two datasets

Parse and validate input data

Perform reconciliation in memory

Present results through summaries, visual indicators, and tables

Reconciliation Logic

A record is considered a match if the same invoice_id exists in both datasets and the amount is exactly equal.

A mismatch occurs when the invoice_id exists in both datasets but the amounts differ.

A record is considered missing if it exists in one dataset but not in the other.

This logic was chosen to be simple, deterministic, and easy to reason about.

Technical Stack

React (Vite) – frontend framework

Tailwind CSS – styling and layout

PapaParse – CSV parsing in the browser

Recharts – data visualization

In-memory processing – no backend


UX Decisions

Summary cards provide a quick high-level snapshot

A pie chart visualizes the overall reconciliation status

A legend explains color meanings and record counts

Searchable tables allow detailed inspection of records

Defensive rendering prevents crashes during empty searches

Assumptions

Input files are provided in CSV format

Each record contains the fields: invoice_id, date, and amount

invoice_id uniquely identifies a record

Amount comparison is exact 

Data size is small enough to be processed in memory
