import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, ArrowRight, Coffee } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState('15 mins');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, cur) => acc + cur.item.price * cur.quantity,
    0
  );
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
      setOrderComplete(false);
      setCheckoutModal(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Slide-in Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF7F2] text-[#201712] shadow-2xl flex flex-col h-full border-l border-[#E8DEC8] z-10 animate-slideLeft">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8DEC8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C87941]" />
            <h3 className="font-serif text-lg font-bold text-[#201712]">Your Order Bag</h3>
            <span className="px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E8DEC8] text-xs font-bold text-[#5A4B40]">
              {items.reduce((acc, c) => acc + c.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF7F2] text-[#7E7267] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#EAD8C7] text-[#3B2A20] flex items-center justify-center mx-auto">
                <Coffee className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#201712]">Your bag is empty</h4>
              <p className="text-xs text-[#7E7267] max-w-xs mx-auto">
                Explore our espresso drinks, hand pour-overs, fresh bakes, or whole bean bags.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2 rounded-xl bg-[#3B2A20] text-white text-xs font-semibold cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((cartItem) => (
              <div
                key={cartItem.id}
                className="p-4 rounded-xl bg-white border border-[#E8DEC8] shadow-sm flex gap-3 items-center justify-between"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#E8DEC8]">
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-xs font-bold text-[#201712] truncate">
                    {cartItem.item.name}
                  </h4>
                  <p className="text-[11px] text-[#7E7267]">
                    ${cartItem.item.price.toFixed(2)} each
                  </p>
                  <p className="font-semibold text-xs text-[#C87941] mt-0.5">
                    ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Counter & Delete */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-[#E8DEC8] rounded-lg bg-[#FAF7F2]">
                    <button
                      onClick={() => onUpdateQuantity(cartItem.id, -1)}
                      className="p-1 hover:text-[#C87941] text-[#5A4B40] cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 text-xs font-bold text-[#201712]">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(cartItem.id, 1)}
                      className="p-1 hover:text-[#C87941] text-[#5A4B40] cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(cartItem.id)}
                    className="p-1 text-[#9E8E81] hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8DEC8] space-y-3">
            <div className="space-y-1.5 text-xs text-[#6B5C50]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#201712]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8.5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#201712] pt-1.5 border-t border-[#EFE7DC]">
                <span>Total</span>
                <span className="text-[#C87941] font-serif text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => setCheckoutModal(true)}
              className="w-full py-3.5 rounded-xl bg-[#C87941] hover:bg-[#b56b37] text-white font-bold uppercase tracking-wider text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Order for In-Store Pickup <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Checkout Pickup Modal */}
      {checkoutModal && (
        <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-[#E8DEC8] shadow-2xl relative">
            <button
              onClick={() => setCheckoutModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-[#7E7267] hover:bg-[#EFE7DC] cursor-pointer"
            >
              ✕
            </button>

            {orderComplete ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#201712]">Order Received!</h4>
                <p className="text-xs text-[#5A4B40]">
                  Thank you, {customerName || 'friend'}! We are preparing your order right now. Your coffee will be waiting on the pick-up counter at 412 Roaster's Way in {pickupTime}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCompleteOrder} className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C87941]">Express Cafe Pickup</span>
                  <h3 className="font-serif text-xl font-bold text-[#201712]">Confirm Your Order</h3>
                  <p className="text-[11px] text-[#7E7267] mt-0.5">Pay at counter upon pickup</p>
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2A20] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Maya Lin"
                    className="w-full p-2.5 rounded-xl border border-[#E8DEC8] bg-white text-[#201712] focus:outline-none focus:ring-2 focus:ring-[#C87941]/30"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2A20] mb-1">Ready In</label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E8DEC8] bg-white text-[#201712]"
                  >
                    <option value="10 mins">10 minutes (ASAP)</option>
                    <option value="20 mins">20 minutes</option>
                    <option value="30 mins">30 minutes</option>
                    <option value="45 mins">45 minutes</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E8DEC8] space-y-1 text-[11px]">
                  <div className="flex justify-between font-bold text-[#201712]">
                    <span>Total Due at Counter:</span>
                    <span className="text-[#C87941]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#C87941] text-white font-bold uppercase tracking-wider text-xs hover:bg-[#b56b37] transition-colors cursor-pointer shadow-md"
                >
                  Send Order to Barista ☕
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
