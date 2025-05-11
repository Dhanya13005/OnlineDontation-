package com.example.OnlineDonationProject1.service;

	import com.example.OnlineDonationProject1.model.Donation;
	import com.example.OnlineDonationProject1.repository.DonationRepository;
	import jakarta.transaction.Transactional;
	import org.springframework.stereotype.Service;

	import java.util.List;

	@Service
	public class DonationService {

	    private final DonationRepository donationRepository;

	    public DonationService(DonationRepository donationRepository) {
	        this.donationRepository = donationRepository;
	    }

	    @Transactional
	    public Donation createDonation(Donation donation) {
	        donation.setPaymentStatus("PENDING");
	        return donationRepository.save(donation);
	    }

	    public List<Donation> getAllDonations() {
	        return donationRepository.findAll();
	    }

	    public Donation getDonationById(Long id) {
	        return donationRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Donation not found with ID: " + id));
	    }

	    @Transactional
	    public Donation updateDonationStatus(Long id, String status) {
	        Donation donation = donationRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Donation not found with ID: " + id));
	        donation.setPaymentStatus(status);
	        return donationRepository.save(donation);
	    }

	    @Transactional
	    public void deleteDonation(Long id) {
	        if (!donationRepository.existsById(id)) {
	            throw new RuntimeException("Donation not found with ID: " + id);
	        }
	        donationRepository.deleteById(id);
	    }
	}
