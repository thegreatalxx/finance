# Ratio volatility put spread

By The Editors

Updated May 13, 2026

---

TheAlxLabs Finance.

## Table of contents

What is a ratio volatility put spread?

A hypothetical scenario

The best case scenario: maximum profit

The worst case scenario: maximum loss

The break-even

What Marcus is actually hoping for

Risks to keep on your radar

Putting it all together

What is a ratio volatility put spread?

A hypothetical scenario

The best case scenario: maximum profit

The worst case scenario: maximum loss

The break-even

What Marcus is actually hoping for

Risks to keep on your radar

Putting it all together

You think a stock is heading lower — and you want amplified exposure to that decline without spending a lot to get it. A ratio volatility put spread lets you sell one put to help fund two, giving you double the downside exposure above a defined cost. The trade-off? A loss zone if the stock only falls a little.

Here's how it works.

## What is a ratio volatility put spread?

A ratio volatility put spread is built with three options contracts:

Sell 1 put at a higher strike price

Sell 1 put at a higher strike price

Buy 2 puts at a lower strike price

Buy 2 puts at a lower strike price

All three use the same stock and the same expiry date. The put you sell helps offset the cost of the two puts you buy — sometimes enough to set the whole thing up for a net credit.

One way to think about it: a 1x2 ratio volatility put spread is essentially a bull put spread (the short higher-strike put + one long lower-strike put) combined with an additional long put at the lower strike. That extra long put is what gives you the amplified downside exposure.

Because this strategy uses three options contracts, it's a multi-leg strategy.

Legs of the trade: 3 (short put at higher strike + 2 long puts at lower strike) Sentiment: Bearish

Important to flag upfront: like its call spread counterpart, the maximum loss here can be greater than the premium paid — or greater than the credit received — to set it up. Understand your numbers before entering.

## Trade options with lower fees

Options let you do more than just buy stocks. You can also speculate on how much they’ll rise or fall — which could be for less than it would cost to buy the stock itself. Learn more

## A hypothetical scenario

Let's say Marcus has been watching PEAR stock, currently trading at $100. He thinks it's heading lower — and quickly. He sets up a 1x2 ratio volatility put spread.

Here's what he does:

Sells 1 PEAR January 100 put at $3.50

Sells 1 PEAR January 100 put at $3.50

Buys 2 PEAR January 95 puts at $1.50 each ($3.00 total)

Buys 2 PEAR January 95 puts at $1.50 each ($3.00 total)

Net credit: $3.50 – $3.00 = $0.50

Marcus collects $0.50 per share to enter the position — that's $50 in his account upfront (before fees and commissions).

## The best case scenario: maximum profit

Because Marcus is net long two puts below $95 and only short one put above, his profit grows the further PEAR falls. There's no upside here like in a call strategy — a stock can only fall to zero — but a sharp decline can still be very profitable.

Question: PEAR finishes at $87 at expiration. What's Marcus's profit (before fees and commissions)?

Answer: $350

Stock price | Short 1 x 100 put | Long 2 x 95 puts | Net profit/loss
$87 | -$9.50 | +$13.00 | +$3.50

Short 100 put: Worth $13 at expiration. Marcus collected $3.50, so he has a loss of $9.50.

Short 100 put: Worth $13 at expiration. Marcus collected $3.50, so he has a loss of $9.50.

Long 95 puts (×2): Each worth $8 at expiration. Marcus paid $1.50 each, so he has a profit of $6.50 per put, or $13.00 for both.

Long 95 puts (×2): Each worth $8 at expiration. Marcus paid $1.50 each, so he has a profit of $6.50 per put, or $13.00 for both.

(–$9.50) + ($13.00) = $3.50 × 100 = $350

## The worst case scenario: maximum loss

A small drop is the danger zone here. If PEAR falls just to the lower strike ($95) at expiration, the bull put spread hits its maximum loss and both long puts expire worthless. It's a defined loss — but larger than the initial credit received.

Question: PEAR closes at $95 at expiration. What's Marcus's loss (before fees and commissions)?

Answer: –$450

Maximum loss formula: (net premium received) – (difference between strikes) ($0.50) – ($100 – $95) = $0.50 – $5.00 = –$4.50 × 100 = –$450

Here's what it would look like across a range of expiration prices:

Stock price | Short 1 × 100 put | Long 2 × 95 puts | Net profit/loss
$103+ | +$3.50 | –$3.00 | +$0.50
$100 | +$3.50 | –$3.00 | +$0.50
$99 | +$2.50 | –$3.00 | –$0.50
$97 | +$0.50 | –$3.00 | –$2.50
$95 | –$1.50 | –$3.00 | –$4.50
$93 | –$3.50 | +$1.00 | –$2.50
$91 | –$5.50 | +$5.00 | –$0.50
$90 | –$6.50 | +$7.00 | +$0.50
$88 | –$8.50 | +$11.00 | +$2.50
$87 | –$9.50 | +$13.00 | +$3.50

The pain zone is between the two strikes: a small dip in price hurts more than staying flat. Once PEAR falls well below $95, the two long puts take over and the position turns profitable again.

If PEAR stays above $100, all options expire worthless and Marcus keeps the $0.50 credit. If the trade was set up for a net debit instead, he'd lose that amount — but nothing more on the upside.

## The break-even

Because Marcus entered the position for a net credit, there are two break-even points.

Higher break-even: Higher strike – net credit $100 – $0.50 = $99.50

Lower break-even: Lower strike – absolute value of maximum loss $95 – $4.50 = $90.50

Between $90.50 and $99.50, the position loses money. Above $99.50 or below $90.50, it's profitable.

If the spread had been set up for a net debit, there would only be one break-even — the lower one — because any finish above the higher strike would result in a loss equal to the debit paid.

## What Marcus is actually hoping for

He wants PEAR to drop — and drop decisively, well below $90.50. The further it falls, the more the two long puts outpace the single short put, and profits keep growing. A stock that drifts down just a little, landing near $95, is the worst outcome. He's rooting for a significant move, not a slight one.

## Risks to keep on your radar

## The pain zone

The maximum loss occurs if PEAR finishes exactly at the lower strike ($95) at expiration. At that point, the bull put spread hits its maximum value and both long puts expire worthless. The loss is defined — but it's larger than the credit received, which is what makes this strategy different from a standard put spread.

## Early assignment

Because Marcus sold a put, he carries early assignment risk on that leg. The buyer of the short 100 put can exercise it early at any time before expiration, and Marcus has no control over the timing.

The most common reason: collecting interest on a short stock position. If PEAR is in the money and the interest earned on short stock outweighs the option's remaining time value, the put holder may exercise early.

If Marcus thinks early assignment is likely, he has two options:

Close the entire spread — buy back the short put and sell both long puts

Close the entire spread — buy back the short put and sell both long puts

Buy back just the short put and leave the two long puts open

Buy back just the short put and leave the two long puts open

If he gets assigned on the short put, he's obligated to buy PEAR shares at $100. If he planned to exercise one of his long puts to close out that stock position, the sale date will land one day after the purchase date — which adds fees and potential interest charges. Assignment can also trigger a margin call if there isn't enough equity in the account to cover the resulting long stock position.

One more thing worth flagging: the higher-strike put can be in the money without the lower-strike puts being there too. If Marcus gets assigned on the short put, he could end up holding long stock and two long puts that are still out of the money — a position he wasn't planning for. Have a plan before it happens, not after.

As expiration approaches, if PEAR is near $100, assignment on the short put is uncertain. If it's near $95, assignment is almost certain — and whether the long puts get exercised is the open question. If Marcus wants to avoid any unexpected stock positions, the cleanest move is to close the entire spread before either expiration.

## Putting it all together

A ratio volatility put spread is a high-conviction bearish strategy that carries defined risk. It’s not just betting a stock goes down — it’s betting it drops meaningfully, past the lower strike price and beyond. In exchange for that amplified downside exposure, you accept a loss zone between the two strikes that's larger than your initial cost. By knowing the break-evens, and understanding the pain zone, this strategy can provide a way to express a strong bearish view.

