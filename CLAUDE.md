# Orb & Gravel - Client

## Overview

Customer-facing e-commerce frontend for Orb & Gravel jewelry store. Built with React 18 + Vite, styled with Tailwind CSS, and uses TanStack Query for server state management.

## Tech Stack

- **Framework:** React 18 (JSX, no TypeScript)
- **Build Tool:** Vite 6.x
- **Styling:** Tailwind CSS 3.x with CSS custom properties for brand colors
- **Routing:** React Router DOM v7
- **Server State:** TanStack React Query 5.x (queries + mutations)
- **Client State:** Redux Toolkit + Redux Persist (localStorage)
- **Forms:** Formik + Yup validation
- **HTTP Client:** Axios (configured instance with auth header)
- **Icons:** Heroicons React
- **Animations:** react-transition-group, react-swipeable (carousels)

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Environment Variables

- `VITE_BASEURL` - Backend API base URL (e.g., `http://localhost:5000`)

## Project Structure

```
src/
├── main.jsx              # App entry - providers (QueryClient, Redux, PersistGate)
├── App.jsx               # Router setup with page layout
├── index.css             # Global styles, CSS variables, Tailwind imports
├── axiosConfig.js        # Axios instance with baseURL + auth header
├── assets/               # Static assets, SVG logo components, JSON fixtures
├── pages/                # Route-level page components
│   ├── LandingPage.jsx
│   ├── Category.jsx
│   ├── SingleProductPage.jsx
│   ├── Checkout.jsx
│   ├── Wishlist.jsx
│   ├── Account.jsx
│   ├── OrderHistory.jsx
│   ├── Order.jsx
│   ├── SignIn.jsx
│   ├── SignUp.jsx
│   └── Error.jsx
├── components/           # Reusable UI components
│   ├── Header/           # Site header, cart dropdown, search, quantity controls
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── Carousel/         # Multiple carousel variants (products, images, single-item)
│   ├── Products/         # Product cards, image sliders, rating filters
│   ├── Checkout/         # Multi-step checkout (UserDetails, Shipping, OrderSummary, Confirm)
│   ├── Review/
│   ├── Rating/
│   ├── Featured/
│   ├── FreshSeasonPick/
│   ├── Banner/
│   ├── Modal/
│   ├── Alert/
│   ├── Error/
│   ├── Loader/
│   └── VerticalAlternateList/  # Category showcase with radial animations
├── redux/
│   ├── store.js          # Redux store config with persist
│   └── slices/
│       └── userSlice.js  # User record + guest hash state
└── query/
    ├── api/              # Axios API call functions
    │   ├── product.js
    │   ├── category.js
    │   ├── user.js
    │   ├── cart.js
    │   ├── wishlist.js
    │   └── review.js
    └── hooks/            # TanStack Query hooks wrapping API calls
        ├── useProduct.js
        ├── useCategory.js
        ├── useUser.js
        ├── useCart.js
        ├── useWishlist.js
        └── useReview.js
```

## Architecture Patterns

### Data Fetching Layer
- `src/query/api/` — raw Axios calls grouped by domain
- `src/query/hooks/` — TanStack Query hooks (`useQuery` / `useMutation`) that wrap the API functions
- Mutations automatically invalidate related queries on success
- Categories are cached with `staleTime: Infinity` (rarely change)

### State Management
- **Server state** (products, cart, reviews, wishlist): TanStack React Query
- **Client state** (logged-in user, guest hash): Redux Toolkit with `redux-persist` to localStorage
- Guest users get a UUID-based hash stored in Redux for cart association

### Authentication
- JWT token stored in a cookie (`js-cookie`)
- Axios instance attaches the token via a request interceptor in `axiosConfig.js` — the cookie is read on every outgoing request, so a fresh sign-in is picked up immediately without recreating the instance or reloading the page
- On sign-in success, user object is dispatched to Redux store and token is set in cookie

### Routing
- Layout route (`PageLayout`) wraps all main pages with Header + Footer
- Auth pages (SignIn, SignUp) and Error page render outside the layout
- URL patterns: `/category/:slug`, `/product/:slug`, `/order/:slug`

### Styling & Design System
- Brand color palette via CSS custom properties in `:root` (index.css):
  - `--color-header`: #fefbf1 (cream/off-white)
  - `--color-one`: #f9d574 (gold)
  - `--color-two`: #f3c067 (amber)
  - `--color-three`: #db9035 (burnt orange)
  - `--color-four`: #5d310e (dark brown)
  - `--color-five`: #25190d (near black)
- Tailwind extends these as `colorHeader`, `colorOne`, `colorTwo`, `colorThree`, `colorFour`, `colorFive`
- Custom fonts: Nunito (body), Oswald (headings), Roboto (UI), Poiret One (display)
- Responsive fluid grid: `grid-cols-fluid` with `repeat(auto-fit, minmax(15rem, 1fr))`
- Custom scrollbar styling matching brand colors
- Carousel uses CSS custom properties for item count (`--img-count`) with media query breakpoints

### Component Patterns
- Pages compose feature-specific components
- Carousel components have desktop/mobile variants (swipeable on mobile)
- Cart dropdown has separate small-screen and desktop implementations in `Header/`
- Checkout is multi-step with separate components per step
- Product pages use accordions for details and image sliders by color variant

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | LandingPage | Hero, best sellers carousel, categories, featured |
| `/category/:slug` | Category | Products filtered by category |
| `/product/:slug` | SingleProductPage | Product details, images, reviews, related |
| `/wishlist` | Wishlist | User's saved items (requires auth) |
| `/checkout` | Checkout | Multi-step purchase flow |
| `/account` | Account | User profile |
| `/orderhistory` | OrderHistory | Past orders list |
| `/order/:slug` | Order | Single order details |
| `/sign-in` | SignIn | Login form |
| `/sign-up` | SignUp | Registration form |
| `/*` | Error | 404 fallback |

## Development Notes

- No TypeScript — all `.jsx` / `.js` files
- No test suite currently in place
- No ESLint/Prettier config in repo
- Some JSON fixture files in `assets/` (wishlist.json, orderHistory.json, order.json) suggest some features use mock data
- The `userSlice.js` has a typo: reducer is named `setsetSignedInUser` but exported as `setSignedInUser`
- Checkout and Order pages likely have incomplete backend integration (no order model on server)
