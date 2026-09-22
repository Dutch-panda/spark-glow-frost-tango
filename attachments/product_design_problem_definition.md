# Product Design Strategy & Master Problem Definition: Data-Centered Automotive Spare Parts & Multi-Category Aggregation

**Target Platform:** Torob (E-Commerce Aggregator & Price Comparison Engine)  
**Primary Focus Domain:** Automotive Spare Parts & High-Ambiguity Retail  
**Role:** Senior Digital Product Designer (Marketing, UX/UI, Data-Driven Strategy)  
**Document Purpose:** Master specification document encompassing data architecture, search intelligence, location resolution, user personas, user stories, and end-to-end use cases to guide design sprints and AI engineering workflows.

---

## 1. Executive Summary & Domain Challenge

### Context
Torob is a comprehensive, multi-category price aggregator indexing millions of products across both online e-commerce stores and physical/local offline shops. While covering all product categories (electronics, fashion, home goods, etc.), this specification centers on **Automotive Spare Parts**—a sector notorious for severe information asymmetry, fraud risk, complex vehicle compatibility requirements, and wide price variance driven by brand origin, counterfeiting, and local availability.

### The Core Problem
In auto spare parts and similar technical categories, users face an overwhelming "ambiguity gap." A single brake pad or alternator can vary from $20 to $200 based on country of origin (OEM vs. aftermarket), compatibility, warranty, and seller location. Users struggle to:
1. Know if a part accurately fits their exact vehicle model and year.
2. Search flexible modalities when part names are technical or unknown (e.g., using part serial codes, photos of broken parts, or voice queries while under a hood).
3. Understand whether a drastically lower price means a great deal or a cheap fake.
4. Find nearby physical shops when an urgent repair requires same-day pickup, regardless of how location data is provided.
5. Rank products according to nuanced preferences balancing speed, location proximity, price, and merchant reliability.

### Strategic Product Goal
Transform Torob into a **frictionless, high-trust decision engine** that eliminates pricing ambiguity at a single glance. By leveraging an **Implicit & Express Virtual Garage**, **Multi-Modal Search Architecture**, **Multi-Tier Location Intelligence**, **Dynamic Price Averages**, and a smart **"Best" Weighted Ranking Algorithm**, Torob will guide B2C buyers (and supporting B2B personas) from initial search to instant purchase or local shop contact with complete confidence.

---

## 2. Target Audience & User Segments

While the platform serves multiple personas across the automotive and retail ecosystem, design decisions directly prioritize the **End-Consumer (B2C)** while gracefully accommodating secondary business users.

| Persona Category | Primary Motivation | Key Needs | Priority Level |
| :--- | :--- | :--- | :--- |
| **B2C Customer (Price Hunter / Repairing DIY)** | Save money; ensure exact fit; avoid fake parts; find immediate local availability. | Clear price averages by origin, virtual garage filtering, multi-modal search (photo/barcode), local shop distance, instant contact (call/chat/map). | **Primary Focus** |
| **B2C Customer (On-the-Fence / Budget-Conscious)** | Needs urgent parts but faces short-term liquidity constraints. | Flexible payment terms, installment options (BNPL), high-trust seller validation, intelligent AI query refinements. | **Primary Focus** |
| **B2B Mechanic / Workshop Owner** | Sourcing parts for client repairs quickly at competitive margins. | Fast stock lookup by OEM code/barcode, nearby offline shop routing, reliable specs, fast delivery. | Secondary / Supported |
| **B2B Retailer / Competitor Business** | Benchmarking market prices and competitor positioning across online/offline nodes. | Reliable price history trends, origin-based price distribution analytics. | Secondary / Supported |

---

## 3. Core Feature Architecture & Technical Guidelines

```
             ┌─────────────────────────────────────────────────────────┐
             │       Multi-Modal Input (Text, Voice, Photo, Barcode)   │
             └────────────────────────────┬────────────────────────────┘
                                          │
                                          ▼
             ┌─────────────────────────────────────────────────────────┐
             │   Location Resolution Engine (GPS -> Manual -> IP)      │
             └────────────────────────────┬────────────────────────────┘
                                          │
                                          ▼
             ┌─────────────────────────────────────────────────────────┐
             │ Hybrid Search, Implicit Garage Sync & Compatibility Engine│
             └────────────────────────────┬────────────────────────────┘
                                          │
       ┌──────────────────────────────────┼──────────────────────────────────┐
       ▼                                  ▼                                  ▼
[ Dynamic Price Analytics ]     [ Smart Sorting & "Best" Rank ]    [ AI Search Assistant ]
├── City/National Averages       ├── Weighted Score Algorithm       ├── Query Refinements
└── Origin Breakdown (OEM/Alt)   └── Custom Sort (Price, Distance)  └── Compatibility Prompts
       │                                  │                                  │
       └──────────────────────────────────┼──────────────────────────────────┘
                                          │
                                          ▼
                       [ Single Glance Decision & Purchase Card ]
```

### Guideline 1: Multi-Modal Search Technical Architecture
Torob supports multi-dimensional search lookup methods to capture technical spare part intents:
* **Brand & OEM/Part Serial Code:** Direct parametric string matching against indexed inventory databases (e.g., searching `"26300-35505"` or `"BOSCH 0986494053"`).
* **Visual Search (Picture Input):** Computer vision pipeline leveraging a Deep Convolutional Neural Network (CNN) / Vision Transformer (ViT) to extract features, classify part type (e.g., brake rotor), and perform vector similarity matching against seller product image embeddings.
* **Barcode Scanning:** Optical recognition scanning UPC/EAN/SKU barcodes on packaging, instantly returning matching products with 100% precision.
* **Voice Search:** Automatic Speech Recognition (ASR) engine converted to Natural Language Understanding (NLU) text parsing, handling noisy ambient workshop environments and phonetically transcribing vehicle makes and part jargon.

### Guideline 2: Implicit & Explicit Virtual Garage Sync
* **Implicit Car Detection:** If no car is currently saved in the user's Virtual Garage, the NLU entity extractor monitors search queries. When a query contains vehicle entity tokens (e.g., *"Brake pads for 2017 Hyundai Tucson"*), the system automatically **presupposes and saves "2017 Hyundai Tucson"** to the user's Virtual Garage context with a non-intrusive toast confirmation: *"Saved 2017 Hyundai Tucson to your Garage. Tap to edit."*
* **Compatibility Badge:** Subsequent searches automatically inherit this vehicle context, filtering non-matching items and displaying compatibility badges.

### Guideline 3: Multi-Tier Location Resolution Framework
Location weighting operates across a 3-tier resolution fallback hierarchy:
1. **Tier 1 (High Accuracy):** Device Native GPS / Google Maps Location API (Precise Lat/Lng).
2. **Tier 2 (Explicit User Input):** Manual selection via dedicated Location Selector UI OR inline location query parsing (e.g., typing *"Brake pad repair shop in Shiraz"* in the main search bar).
3. **Tier 3 (Implicit Fallback):** IP Address Geolocation matching city-level coordinates.

### Guideline 4: Smart "Best" Weighted Ranking & Sorting Engine
Users can sort product listings by individual dimensions (Price, Delivery Speed, Distance) or use the default **"Best"** composite ranking algorithm.
* **"Best" Score Calculation:**
  $$\text{Score} = w_1(\text{Normalized Price}) + w_2(\text{Proximity Score}) + w_3(\text{Merchant Rating}) + w_4(\text{Delivery Speed}) + w_5(\text{Torob Approved Bonus})$$
* **Custom Sorting Modes:**
  * **Lowest Price:** Hard sort by final price (including shipping/taxes).
  * **Fastest Delivery:** Prioritizes immediate shipping or same-day local dispatch.
  * **Closest Distance:** Prioritizes nearby physical offline stores.

### Guideline 5: AI-Driven Search Refinement & Guided Prompts
When a search query is ambiguous (e.g., user types *"Elantra Oil Filter"*), an **AI Assistant Banner** actively suggests refinement prompts:
* *"Specify Year & Engine:* Is your Elantra 1.6L or 2.0L?"
* *"Select Quality Tier:* Looking for Genuine OEM or Aftermarket?"
* *"Narrow Location:* Looking for online delivery or local pickup near your city?"

---

## 4. Comprehensive Needs Assessment

| Need Category | User Pain Point | Solution Module | Strategic Value |
| :--- | :--- | :--- | :--- |
| **Search Obstacles** | Not knowing the exact technical name or spelling of a car part. | **Multi-Modal Search (Photo, Barcode, Voice, OEM Code)** | Drastically lowers search abandonment and supports technical/B2B users. |
| **Manual Setup Friction** | Users forget to set up their car profile before searching. | **Implicit Garage Sync from Search Query** | Zero-friction personalization and persistent vehicle context. |
| **Location Inaccuracy** | Users disabling GPS are left with generic national results. | **Multi-Tier Location Engine (GPS / Search Bar Input / IP)** | Maximizes local shop discovery even when location permissions are muted. |
| **Decision Paralysis** | Balancing price, distance, delivery time, and seller trust is confusing. | **"Best" Weighted Ranking Engine** | Delivers an automated optimal trade-off score in a single click. |
| **Query Ambiguity** | Vague search terms lead to wrong part purchases. | **AI-Powered Search Refinement Prompts** | Guides the user to complete fitment confidence prior to purchase. |

---

## 5. User Stories

### Story 1: Multi-Modal Search (Image/Barcode/OEM)
> **As a** user holding a broken part in a garage,  
> **I want to** snap a photo, scan the packaging barcode, or search by OEM serial code,  
> **So that** I can instantly find the exact matching product without typing complex technical terms.

### Story 2: Implicit Virtual Garage Auto-Saving
> **As a** first-time user searching for *"Toyota Corolla 2015 alternator"*,  
> **I want** Torob to automatically detect and save the 2015 Toyota Corolla to my Virtual Garage,  
> **So that** all future searches are automatically tailored to my vehicle without extra setup steps.

### Story 3: Location Resolution via Search Bar
> **As a** user who has turned off phone GPS location permissions,  
> **I want to** type my city name into the search query (e.g., *"Spark plugs Isfahan"*),  
> **So that** Torob resolves my location accurately and surfaces nearby physical stores.

### Story 4: Multi-Criteria "Best" Ranking
> **As a** customer wanting a balance between cheap pricing, high merchant reliability, and fast delivery,  
> **I want to** sort by the default "Best" mode,  
> **So that** I see listings optimized across price, Torob-Approved status, customer ratings, and proximity.

### Story 5: AI Search Refinement
> **As a** novice car owner searching for a broad term like *"Civic headlight"*,  
> **I want** AI suggestions prompting me to select my vehicle trim, origin preference, or lighting type,  
> **So that** I don't accidentally order an incompatible halogen headlight for an LED assembly.

---

## 6. End-to-End Use Cases

### Use Case 1: Photo-Based Local Pickup Search with Implicit Garage Setup
* **Actor:** B2C Customer standing next to a dismantled car component.
* **Pre-conditions:** No vehicle pre-saved in Virtual Garage; GPS disabled.
* **Main Flow:**
  1. User opens Torob, taps the **Camera Search icon**, and takes a picture of the part and its serial code.
  2. Multi-modal AI identifies the part as a *Hyundai Sonata 2018 Starter Motor (OEM: 36100-2E120)*.
  3. Torob detects the vehicle context (*Hyundai Sonata 2018*) and automatically saves it to the user's **Virtual Garage** with a subtle notification.
  4. System uses **IP Geolocation** to estimate city context and displays search results sorted by the **"Best"** weighted score.
  5. User sees an **AI Refinement Prompt**: *"Need local pickup today in Tabriz? Tap to filter local stock."*
  6. User taps the prompt, views local "Torob-Approved" stores, and uses 1-click **Call Shop** to confirm part pickup.
* **Post-conditions:** Part matched accurately via photo/OEM code; garage automatically configured; local transaction enabled despite muted GPS.

### Use Case 2: Multi-Criteria Sorting & AI Refinement
* **Actor:** Cost-Conscious Driver comparing online vs offline options.
* **Pre-conditions:** Vehicle saved in Garage (2020 Kia Sportage).
* **Main Flow:**
  1. User speaks into Voice Search: *"Front shock absorbers for my Sportage"*.
  2. System returns 45 listings across local shops and online vendors.
  3. An **AI Suggestion Pill** appears: *"Compare Quality: Korean Genuine vs. German Aftermarket. Show differences?"*
  4. User taps the pill to view the **Attribute Price Average Bar**: *"Korean Genuine Avg: $180 | German Aftermarket Avg: $110"*.
  5. User toggles the Sort order from **"Best"** to **"Lowest Price"** or **"Closest Distance"** to compare trade-offs.
  6. User selects a "Torob-Approved" seller offering 4x installment payments and completes the order.
* **Post-conditions:** User makes an informed purchase based on multi-criteria sorting and transparent AI price breakdowns.

---

## 7. Actionable Problem Statements for Task Breakdown

### Problem Statement 1: Multi-Modal Search & Technical Input Handling
> **How might we** enable users to query auto parts via image recognition, barcode scanning, voice, and OEM codes so that non-technical users and busy mechanics can find exact parts in under 5 seconds?

### Problem Statement 2: Frictionless Implicit Vehicle Memory Sync
> **How might we** extract vehicle entities from natural language queries to auto-populate the user's "Virtual Garage" when no vehicle is saved, eliminating manual onboard setup?

### Problem Statement 3: Flexible Location Resolution Pipeline
> **How might we** combine GPS data, manual UI location pickers, search bar location text parsing, and IP geolocation to reliably surface local physical store listings?

### Problem Statement 4: Multi-Dimensional Ranking ("Best" Algorithm)
> **How might we** design a transparent composite ranking score ("Best") that balances price, delivery speed, store proximity, merchant reviews, and "Torob-Approved" trust badges?

### Problem Statement 5: AI-Powered Search Assistance & Guided Refinements
> **How might we** use generative AI and NLU to surface contextual search refinement pills that guide users through compatibility, quality origins, and location choices?

---

## 8. Modular Task Breakdown Matrix

| Module | Core Goal | Key UI/UX & Feature Deliverables | AI / Data Requirement |
| :--- | :--- | :--- | :--- |
| **1. Multi-Modal Search** | Support visual, audio, & serial search | Camera view UI with barcode scanner, Voice waveform listener, OEM code parser. | Computer vision embeddings, ASR speech engine, OEM cross-reference DB. |
| **2. Implicit Garage Engine** | Auto-detect car specs from queries | Silent auto-save logic, toast notification with edit drawer, persistent garage pill on UI header. | Natural Language Entity Extraction (NER) for vehicle attributes. |
| **3. Location Resolver** | Multi-tier geo-targeting | Header location selector, search bar location text parser, IP geo-fallback bridge. | Geocoding APIs & spatial index matching. |
| **4. "Best" Ranking & Filters** | Balanced product sorting | Sort dropdown (Best, Price, Speed, Proximity), weighted ranking score badges on listings. | Real-time multi-factor ranking algorithm. |
| **5. AI Search Assistant** | Proactive search refinement | Smart suggestion chips/pills beneath search bar, dynamic price/spec comparison cards. | LLM query intent classifier & dynamic recommendation engine. |

---

## 9. AI Prompt Templates for Further Iteration

### Prompt A: UI/UX Specification for Multi-Modal Search Bar
```text
Role: Senior Product Designer
Task: Design an expanded Mobile Search Bar component supporting multi-modal input.
Context:
1. Search Bar input field with placeholders for text, brand, or OEM code.
2. Icons inside search bar: Camera (Photo/Barcode scan) and Microphone (Voice search).
3. Active AI Suggestion Pills floating under the search bar when query is typed (e.g., "Filter by 2018 Model", "Local Pickup in Tehran").
4. Visual feedback toast when an implicit vehicle model is parsed and saved to the Virtual Garage.
Output: Detailed wireframe layout spec, interaction states, and component hierarchy.
```

### Prompt B: Technical Logic for Multi-Tier Location & "Best" Sorting
```text
Role: Lead Search & Data Engineer
Task: Define the technical resolution logic for Location Determination and the weighted "Best" Sorting Algorithm for Torob listings.
Context:
- Location Input priority: Device GPS > Search Bar City Token > Manual UI Location > IP Geolocation.
- "Best" Sort Score must normalize and combine Price, Proximity Distance, Merchant Review Rating, Delivery Speed, and Torob-Approved Badge flag.
Output: Python/Pseudo-code specifying location fallback resolution and the scoring function calculation for listing candidate re-ranking.
```