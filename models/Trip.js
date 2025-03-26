import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  destinationType: {
    type: String,
    required: true
  },
  destinationCountry: {
    type: String,
    required: true
  },
  destinationSeason: {
    type: String,
    required: true
  },
  duration: {
    days: Number,
    nights: Number
  },
  images: [{
    url: String,
    alt: String
  }],
  itinerary: [{
    dayNumber: Number,
    overview: String,
    schedule: {
      morning: String,
      afternoon: String,
      evening: String
    }
  }],
  stays: [{
    name: String,
    hotelType: String,
    nights: Number,
    images: [String],
    amenities: [String]
  }],
  transfers: [{
    title: String,
    date: String,
    vehicleType: String,
    image: String,
    amenities: [String],
    features: [String]
  }],
  pricing: {
    valuePack: Number,
    elitePack: Number,
    businessPack: Number,
    termsAndConditions: String,
    refundPolicy: String
  },
  reviews: [{
    name: String,
    rating: Number,
    comment: String,
    date: Date
  }],
  termsAndConditions: String,
  status: {
    type: String,
    enum: ['draft', 'active'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema, 'trips');

export default Trip;