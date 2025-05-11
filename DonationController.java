package com.example.OnlineDonationProject1.controller;

	import com.example.OnlineDonationProject1.model.Donation;
	import com.example.OnlineDonationProject1.service.DonationService;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;

	import java.util.List;

	@RestController
	@RequestMapping("/donations")
	@CrossOrigin(origins = "*")
	public class DonationController {

	    private final DonationService donationService;

	    public DonationController(DonationService donationService) {
	        this.donationService = donationService;
	    }

	    @PostMapping("/donate")
	    public ResponseEntity<Donation> donate(@RequestBody Donation donation) {
	        return ResponseEntity.ok(donationService.createDonation(donation));
	    }

	    @GetMapping("/history")
	    public ResponseEntity<List<Donation>> getDonations() {
	        return ResponseEntity.ok(donationService.getAllDonations());
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Donation> getDonationById(@PathVariable Long id) {
	        return ResponseEntity.ok(donationService.getDonationById(id));
	    }

	    @PutMapping("/{id}/update-status")
	    public ResponseEntity<Donation> updateDonationStatus(@PathVariable Long id, @RequestParam String status) {
	        return ResponseEntity.ok(donationService.updateDonationStatus(id, status));
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteDonation(@PathVariable Long id) {
	        donationService.deleteDonation(id);
	        return ResponseEntity.ok("Donation deleted successfully!");
	    }
	}
