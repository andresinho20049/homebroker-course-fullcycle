package entity

import (
	"time"

	"github.com/google/uuid"
)

type Transaction struct {
	ID           string
	SellingOrder *Order
	BuyingOrder  *Order
	Shares       int
	Price        float64
	Total        float64
	DateTime     time.Time
}

func NewTransaction(sellOrder *Order, buyOrder *Order, shares int, price float64) *Transaction {
	return &Transaction{
		ID:           uuid.New().String(),
		SellingOrder: sellOrder,
		BuyingOrder:  buyOrder,
		Shares:       shares,
		Price:        price,
		Total:        0,
		DateTime:     time.Now(),
	}
}

func (t *Transaction) Process() {
	processor := NewOrderProcessor(t)
	processor.Process()
}
