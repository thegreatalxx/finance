# Long call calendar spread

By The Editors

Updated May 13, 2026

---

TheAlxLabs Finance.

## Table of contents

What is a long call calendar spread?

A real example (with fake numbers)

The best case: maximum profit

The worst case: maximum loss

The break-even

Risks to keep on your radar

Putting it all together

What is a long call calendar spread?

A real example (with fake numbers)

The best case: maximum profit

The worst case: maximum loss

The break-even

Risks to keep on your radar

Putting it all together

You think a stock is going to sit still for a while — but you don't want to miss the move when it eventually happens. A long call calendar spread lets you sell short-term "quiet" to help pay for longer-term upside exposure. Two options, one strike price, two different expiry dates.

Here's how it works.

## What is a long call calendar spread?

A long call calendar spread — also called a long time spread or long horizontal spread — is created by:

Selling a call option with a nearer expiry date (month 1)

Selling a call option with a nearer expiry date (month 1)

Buying a call option with a later expiry date (month 2)

Buying a call option with a later expiry date (month 2)

Both options are on the same stock and use the same strike price. Because the longer-dated option always costs more than the shorter-dated one, this strategy is set up for a net debit — you pay to enter.

The idea: if the stock stays flat in the near term, the short-dated call you sold loses value faster than the longer-dated call you own. That time decay works in your favour. Once the short-dated call expires, you're left holding longer-term upside exposure at a lower cost than buying the call outright.

Legs of the trade: 2 (short call, month 1 + long call, month 2) Strike price: Same for both legs Sentiment: Neutral to bullish

A note on the name: "long" means the strategy is set up for a net debit. "Time" and "horizontal" both describe the relationship between the two expiry dates — the options expire at different times but share the same strike price.

## Trade options with lower fees

Options let you do more than just buy stocks. You can also speculate on how much they’ll rise or fall — which could be for less than it would cost to buy the stock itself. Learn more

## A real example (with fake numbers)

Let's say Marcus has been watching PEAR stock, currently trading at $100. He thinks PEAR isn't going anywhere in the next month, but he's bullish on it over the next few months. He sets up a long call calendar spread.

Here's what he does:

Sells 1 PEAR Month 1 100 call at $3.35

Sells 1 PEAR Month 1 100 call at $3.35

Buys 1 PEAR Month 2 100 call for $4.75

Buys 1 PEAR Month 2 100 call for $4.75

His net debit is $1.40 per share, or $140 including the options multiplier of 100. That's the most he can lose.

## The best case: maximum profit

Marcus's ideal scenario plays out in two acts: PEAR stays flat through month 1, and then rallies after. If PEAR finishes at or below $100 at month 1 expiration, the short call expires worthless and he keeps that premium. Then if PEAR climbs by month 2 expiration, the longer-dated call he's holding captures the upside.

Quiz: PEAR is trading at $100 when the spread is set up for a $1.40 debit. PEAR closes below $100 at month 1 expiration (Marcus isn't assigned on the short call). Then PEAR finishes at $110 at month 2 expiration. What's Marcus's profit (before fees and commissions)?

Answer: $860

Here's how it breaks down by leg:

Month 1 — short call: PEAR finished below the $100 strike, so the short call expires worthless. Marcus keeps the full premium collected. $3.35 × 100 = $335

Month 2 — long call: PEAR finished at $110. Marcus paid $4.75 for a call that's now worth $10. $10.00 – $4.75 = $5.25 × 100 = $525

Net profit: $335 + $525 = $860

## The worst case: maximum loss

PEAR made a big move — in either direction. When the stock moves sharply away from the strike, the difference in value between the two calls shrinks toward zero, and Marcus loses the full amount he paid to set up the spread. A sharp drop sends both calls toward zero. A sharp rally pushes both calls deep in the money, where they trade at near-equal prices. Either way, the spread collapses.

The maximum loss is the net debit paid to enter the position: $140.

Question: PEAR finishes below $100 at both month 1 and month 2 expirations, and Marcus isn't assigned on the short call or exercising the long call. What's his profit or loss?

Answer: –$140

Both options expire worthless. Marcus loses only what he paid to set up the spread.

–$1.40 × 1 × 100 = –$140

Because PEAR stayed below the strike at month 1 expiration, Marcus kept the short call premium. So effectively, he bought the month 2 call for the net cost of the spread ($1.40) — and when PEAR finished below the strike at month 2, that call expired worthless too.

## The break-even

Unlike a simple single-leg option, a long call calendar spread has two break-even points — one above the strike and one below. They're the stock prices, at month 1 expiration, where the remaining time value of the longer-dated call equals the original cost of the spread. The exact break-evens depend on market conditions at the time of month 1 expiration, so they can't be pinned down with a single formula upfront.

What Marcus is actually hoping for

He wants PEAR to hover around $100 through month 1 — just quiet enough for the short-dated call to expire worthless — and then climb meaningfully before month 2. That's the two-act scenario where this strategy earns its keep. The near-term flatness funds the longer-term bet.

## Risks to keep on your radar

## Early assignment

Because Marcus sold a call, he carries early assignment risk on that leg. The buyer of the short month 1 call can exercise it early at any time — Marcus has no say in the timing.

The most common reason: capturing a dividend. If PEAR is paying a dividend and the short call is in the money, the holder may exercise early to become a shareholder on record date. If Marcus gets assigned before that date, he'll be short PEAR stock going into the ex-date — a position he wasn't planning for.

His long month 2 call has no early assignment risk. He controls when and whether he exercises it.

## The two-expiry complication

This is what makes calendar spreads different from standard vertical spreads: there are two expirations to manage, not one.

If Marcus gets assigned on the short month 1 call, he ends up short PEAR stock — and he's still holding the long month 2 call. He now has to manage that position until month 2 expiration:

If PEAR is above the strike at month 2 expiration, he can exercise his long call to close the short stock position.

If PEAR is above the strike at month 2 expiration, he can exercise his long call to close the short stock position.

If PEAR is below the strike at month 2 expiration, the long call won't be exercised — and Marcus will need to buy shares in the market to close the short stock position before he ends up holding a naked short.

If PEAR is below the strike at month 2 expiration, the long call won't be exercised — and Marcus will need to buy shares in the market to close the short stock position before he ends up holding a naked short.

Also worth knowing: options are automatically exercised at expiration if they're at least $0.01 in the money. If PEAR is hovering near $100 as either expiration approaches, Marcus needs to have a plan — for both dates, not just one.

If he wants to avoid any unexpected stock positions, the cleanest move is to close the spread before either expiration date. With two expirations in play, staying on top of both is part of managing this trade.

## Putting it all together

A long call calendar spread might be a smart play when you think a stock is stuck in neutral for now but has real upside ahead. You use the near-term lull to reduce the cost of your longer-dated bet. The risk is capped at what you paid to enter. The reward depends on how well your timing plays out — on both expiration dates.

