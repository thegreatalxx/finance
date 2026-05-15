# Bear put spread

By The Editors

Updated May 13, 2026

---

TheAlxLabs Finance.

## Table of contents

What is a bear put spread?

Why use a bear put spread?

Maximum potential gain

Maximum potential loss

Ideal outcome

Risks to know about

Payout at a glance

What is a bear put spread?

Why use a bear put spread?

Maximum potential gain

Maximum potential loss

Ideal outcome

Risks to know about

Payout at a glance

There are a lot of ways to use options — generating income, protecting a position, or getting exposure to a price move without buying or selling shares directly. This article covers one specific strategy: the bear put spread.

## What is a bear put spread?

A bear put spread (also called a debit put spread) involves buying a put at a higher strike price and simultaneously selling a put at a lower strike price — both on the same underlying security and with the same expiration date.

The goal? To gain exposure to a potential decline in price while reducing the upfront cost of the trade — and capping how much you can lose.

Suggested prerequisite knowledge: short puts, long puts

Sentiment: bearish

Legs: 2 (one long put, one short put)

## Why use a bear put spread?

This strategy is typically used when you think a security's price will decline, but you want to limit your initial cash outlay. Selling the lower strike put brings in some premium, which helps offset the cost of buying the higher strike put.

The trade-off: your potential profit is capped. But so is your potential loss — and you know both numbers before you place the trade.

## Trade options with lower fees

Options let you do more than just buy stocks. You can also speculate on how much they’ll rise or fall — which could be for less than it would cost to buy the stock itself. Learn more

Let's say Alex has been following a stock — we'll call it PEAR — and thinks its price is headed lower. Alex wants some bearish exposure but also wants a defined risk profile, so they opt for a bear put spread over selling stock outright.

Here's how the trade is set up:

Short (sell): 1 PEAR $95 put at $1.30

Short (sell): 1 PEAR $95 put at $1.30

Long (buy): 1 PEAR $100 put at $3.20

Long (buy): 1 PEAR $100 put at $3.20

Note: In the U.S., most listed options have a contract multiplier of 100. That means each contract represents 100 units of the underlying security.

Alex pays a net premium of $1.90 ($3.20 paid − $1.30 received).

## Maximum potential gain

Alex's maximum gain is the difference between the two strikes, minus the net premium paid. It's realized if PEAR finishes at or below the lower strike ($95) at expiration.

Here's how that works:

At expiration, PEAR closes at $90

When PEAR finishes below the lower strike, the spread reaches its maximum value — the difference between the strikes: $100 − $95 = $5.

Put spread value at expiration: $5.00

Put spread value at expiration: $5.00

Net premium paid: $1.90

Net premium paid: $1.90

$5.00 − $1.90 = $3.10

Multiply by 1 contract × 100 (multiplier) = $310, less fees and commissions.

Prefer to look at each leg separately?

The $100 put is worth $10 → Alex paid $3.20 → profit: $6.80

The $100 put is worth $10 → Alex paid $3.20 → profit: $6.80

The $95 put is worth $5 → Alex collected $1.30 → loss: $3.70

The $95 put is worth $5 → Alex collected $1.30 → loss: $3.70

$6.80 − $3.70 = $3.10 × 100 = $310, less fees and commissions.

No matter how far PEAR drops below $95, the profit doesn't increase beyond this point.

## Maximum potential loss

If PEAR's price rises above the higher strike ($100), both puts expire worthless and Alex loses the full premium paid.

Here's what that looks like:

At expiration, PEAR closes at $110

The $100 put is worth $0 → Alex paid $3.20 → loss: $3.20

The $100 put is worth $0 → Alex paid $3.20 → loss: $3.20

The $95 put is worth $0 → Alex collected $1.30 → gain: $1.30

The $95 put is worth $0 → Alex collected $1.30 → gain: $1.30

−$3.20 + $1.30 = −$1.90

Multiply by 1 contract × 100 = −$190, less fees and commissions.

Alex's maximum loss is limited to the net premium paid — $190. That's known before the trade is placed.

Formula: long put strike − net premium paid

$100 − $1.90 = $98.10

Alex needs PEAR to be below $98.10 at expiration for the trade to be profitable.

## Ideal outcome

PEAR's price declines to or slightly below the short put strike ($95) at expiration. At that point, the spread is at its maximum value and Alex realizes the full potential gain on the position.

## Risks to know about

## Early assignment

Early assignment is a risk that applies to the short option leg only.

In the U.S., equity options can be exercised any business day before expiration. As the seller of the short put, Alex doesn't control when (or if) that happens.

The most common reason a put gets exercised early is to capture interest on a short stock position. If the interest earned exceeds the remaining extrinsic value of the in-the-money put, the holder may choose to exercise early.

A few things to keep in mind:

The long put (higher strike) carries no early assignment risk — Alex controls that leg

The long put (higher strike) carries no early assignment risk — Alex controls that leg

The short put (lower strike) can be assigned early

The short put (lower strike) can be assigned early

If the short put is in the money and Alex thinks early assignment is likely, there are a couple of ways to manage the position:

Close the entire spread: buy the short put to close, and sell the long put to close

Close the entire spread: buy the short put to close, and sell the long put to close

Close just the short put: buy it back to close, and leave the long put open

Close just the short put: buy it back to close, and leave the long put open

If early assignment does happen on the short put, Alex is obligated to buy shares at the short put strike price. This could also trigger a margin call if there isn't enough account equity to support the resulting stock position.

One more thing: the lower strike put will never be in the money without the higher strike put also being in the money. That said, Alex can still be assigned on the short put even if both options are in the money. If that happens, Alex can exercise the long put to close the resulting stock position — but the sale date will be later than the purchase date. That timing difference can result in additional fees, including interest and commissions.

Note: Options are automatically exercised at expiration if they're at least $0.01 in the money. If PEAR's price is close to the short strike near expiration, assignment of the short put is uncertain and only the higher strike put is likely to be exercised. If Alex wants to avoid holding a stock position after expiration, the spread should be closed (short put bought, long put sold) before the market closes on expiration day.

## Payout at a glance

Scenario | Outcome
PEAR drops to $95 or below | Maximum gain: $310 (before fees)
PEAR closes at $98.10 | Break-even
PEAR rises above $100 | Maximum loss: $190 (before fees)

